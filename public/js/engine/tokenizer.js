// Robust text tokenization and normalization engine

export function normalizeText(rawText) {
  if (!rawText) return '';
  return rawText
    .replace(/[\u2018\u2019]/g, "'") // replace curly apostrophes
    .replace(/[\u201C\u201D]/g, '"') // replace curly quotes
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/[\u00A0\u200B]/g, ' ') // non-breaking & zero-width spaces
    .trim();
}

export function tokenize(rawText) {
  const clean = normalizeText(rawText);
  if (!clean) {
    return {
      text: '',
      paragraphs: [],
      sentences: [],
      words: [],
      wordCount: 0,
      sentenceCount: 0,
      paragraphCount: 0,
      avgSentenceLength: 0
    };
  }

  // Paragraphs are separated by 2 or more newlines
  const rawParagraphs = clean.split(/\n\s*\n+/);
  const paragraphs = rawParagraphs.map(p => p.trim()).filter(p => p.length > 0);

  // Sentences split on terminal punctuation
  const sentenceMatches = clean.match(/[^.!?]+[.!?]+(\s|$)|[^.!?]+$/g) || [];
  const sentences = sentenceMatches.map(s => s.trim()).filter(s => s.length > 0);

  // Words extracted by regex
  const wordMatches = clean.match(/[A-Za-z0-9]+(?:'[A-Za-z0-9]+)?/g) || [];
  const words = wordMatches.map(w => w.toLowerCase());

  const wordCount = words.length;
  const sentenceCount = sentences.length || 1;
  const avgSentenceLength = wordCount / sentenceCount;

  return {
    text: clean,
    paragraphs,
    sentences,
    words,
    wordCount,
    sentenceCount,
    paragraphCount: paragraphs.length,
    avgSentenceLength
  };
}
