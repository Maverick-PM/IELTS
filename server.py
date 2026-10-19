import http.server
import socket
import socketserver
import os
import sys

PORT = 8080
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DIRECTORY = os.path.join(BASE_DIR, 'public')

class OfflineIELTSHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Critical headers for PWA Service Worker offline caching
        self.send_header('Service-Worker-Allowed', '/')
        self.send_header('Cache-Control', 'no-cache')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def guess_type(self, path):
        # Ensure correct MIME types for modern ES modules and manifests
        p = str(path).lower()
        if p.endswith('.js') or p.endswith('.mjs'):
            return 'application/javascript; charset=utf-8'
        if p.endswith('.json') or p.endswith('.webmanifest'):
            return 'application/json; charset=utf-8'
        if p.endswith('.css'):
            return 'text/css; charset=utf-8'
        if p.endswith('.svg'):
            return 'image/svg+xml'
        return super().guess_type(path)

    def log_message(self, format, *args):
        # Clean logging for requested resources
        sys.stdout.write(f"[{self.log_date_time_string()}] {format % args}\n")
        sys.stdout.flush()

def get_ip_addresses():
    ips = []
    try:
        hostname = socket.gethostname()
        for ip in socket.gethostbyname_ex(hostname)[2]:
            if not ip.startswith('127.'):
                ips.append(ip)
    except Exception:
        pass
    return ips

if __name__ == '__main__':
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(('0.0.0.0', PORT), OfflineIELTSHandler) as httpd:
        print("=" * 60)
        print("  IELTS Academic 4-in-1 Offline Suite is LIVE!")
        print("=" * 60)
        print(f"  On this Computer:   http://localhost:{PORT}")
        print(f"  On your Phone:      http://192.168.137.1:{PORT} (Hotspot)")
        for ip in get_ip_addresses():
            if ip != '192.168.137.1':
                print(f"  Alternative IP:     http://{ip}:{PORT}")
        print("=" * 60)
        print("  Instructions for your Phone (Infinix Hot 70):")
        print("  1. Connect your phone to PC via Mobile Hotspot or Wi-Fi.")
        print("  2. Open Chrome on your phone and go to:")
        print(f"     http://192.168.137.1:{PORT}")
        print("  3. Tap Chrome's menu (3 dots) -> 'Install App' or 'Add to Home screen'.")
        print("  4. The entire app will be permanently saved to your phone!")
        print("=" * 60)
        sys.stdout.flush()
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
