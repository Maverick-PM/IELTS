// Offline Storage Service with IndexedDB and LocalStorage Fallback

const DB_NAME = 'ielts_offline_db';
const DB_VERSION = 1;
const STORE_DRAFTS = 'drafts';
const STORE_SUBMISSIONS = 'submissions';

export class StorageService {
  constructor(options = {}) {
    this.useMemory = options.useMemory || false;
    this.memoryDrafts = new Map();
    this.memorySubmissions = [];
    this._db = null;
  }

  async _getDB() {
    if (this.useMemory) return null;
    if (typeof window === 'undefined' || !window.indexedDB) return null;
    if (this._db) return this._db;

    return new Promise((resolve) => {
      try {
        const request = window.indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = (event) => {
          const db = event.target.result;
          if (!db.objectStoreNames.contains(STORE_DRAFTS)) {
            db.createObjectStore(STORE_DRAFTS, { keyPath: 'promptId' });
          }
          if (!db.objectStoreNames.contains(STORE_SUBMISSIONS)) {
            const subStore = db.createObjectStore(STORE_SUBMISSIONS, { keyPath: 'id' });
            subStore.createIndex('createdAt', 'createdAt', { unique: false });
          }
        };

        request.onsuccess = (event) => {
          this._db = event.target.result;
          resolve(this._db);
        };

        request.onerror = () => {
          resolve(null); // Fallback to localStorage
        };
      } catch (e) {
        resolve(null);
      }
    });
  }

  async saveDraft(promptId, text) {
    if (this.useMemory) {
      this.memoryDrafts.set(promptId, text);
      return;
    }

    const db = await this._getDB();
    if (db) {
      return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_DRAFTS, 'readwrite');
        const store = tx.objectStore(STORE_DRAFTS);
        store.put({ promptId, text, updatedAt: new Date().toISOString() });
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
      });
    }

    // LocalStorage Fallback
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem(`ielts_draft_${promptId}`, text);
      } catch (e) { /* ignore */ }
    }
  }

  async getDraft(promptId) {
    if (this.useMemory) {
      return this.memoryDrafts.get(promptId) || null;
    }

    const db = await this._getDB();
    if (db) {
      return new Promise((resolve) => {
        const tx = db.transaction(STORE_DRAFTS, 'readonly');
        const store = tx.objectStore(STORE_DRAFTS);
        const req = store.get(promptId);
        req.onsuccess = () => resolve(req.result ? req.result.text : null);
        req.onerror = () => resolve(null);
      });
    }

    // LocalStorage Fallback
    if (typeof localStorage !== 'undefined') {
      try {
        return localStorage.getItem(`ielts_draft_${promptId}`) || null;
      } catch (e) {
        return null;
      }
    }
    return null;
  }

  async clearDraft(promptId) {
    if (this.useMemory) {
      this.memoryDrafts.delete(promptId);
      return;
    }

    const db = await this._getDB();
    if (db) {
      return new Promise((resolve) => {
        const tx = db.transaction(STORE_DRAFTS, 'readwrite');
        const store = tx.objectStore(STORE_DRAFTS);
        store.delete(promptId);
        tx.oncomplete = () => resolve();
        tx.onerror = () => resolve();
      });
    }

    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.removeItem(`ielts_draft_${promptId}`);
      } catch (e) { /* ignore */ }
    }
  }

  async saveSubmission(record) {
    if (this.useMemory) {
      this.memorySubmissions.unshift(record);
      return;
    }

    const db = await this._getDB();
    if (db) {
      return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_SUBMISSIONS, 'readwrite');
        const store = tx.objectStore(STORE_SUBMISSIONS);
        store.put(record);
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
      });
    }

    // LocalStorage Fallback
    if (typeof localStorage !== 'undefined') {
      try {
        const existing = JSON.parse(localStorage.getItem('ielts_submissions') || '[]');
        existing.unshift(record);
        localStorage.setItem('ielts_submissions', JSON.stringify(existing.slice(0, 50)));
      } catch (e) { /* ignore */ }
    }
  }

  async getHistory() {
    if (this.useMemory) {
      return this.memorySubmissions;
    }

    const db = await this._getDB();
    if (db) {
      return new Promise((resolve) => {
        const tx = db.transaction(STORE_SUBMISSIONS, 'readonly');
        const store = tx.objectStore(STORE_SUBMISSIONS);
        const req = store.getAll();
        req.onsuccess = () => {
          const list = req.result || [];
          list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          resolve(list);
        };
        req.onerror = () => resolve([]);
      });
    }

    if (typeof localStorage !== 'undefined') {
      try {
        return JSON.parse(localStorage.getItem('ielts_submissions') || '[]');
      } catch (e) {
        return [];
      }
    }
    return [];
  }
}

export const storageService = new StorageService();
