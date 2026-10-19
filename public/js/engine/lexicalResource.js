import { ACADEMIC_WORD_LIST, ADVANCED_DESCRIPTORS } from '../data/academicWordList.js';

const UPGRADE_DICTIONARY = {
  'good': ['beneficial', 'advantageous', 'favorable', 'meritorious'],
  'bad': ['detrimental', 'deleterious', 'adverse', 'disadvantageous'],
  'big': ['substantial', 'considerable', 'monumental', 'extensive'],
  'small': ['negligible', 'marginal', 'inconsequential', 'diminutive'],
  'get': ['acquire', 'obtain', 'derive', 'procure'],
  'show': ['illustrate', 'demonstrate', 'exemplify', 'indicate'],
  'make': ['generate', 'produce', 'fabricate', 'formulate'],
  'help': ['facilitate', 'assist', 'expedite', 'subsidize'],
  'problem': ['impediment', 'dilemma', 'pressing issue', 'predicament'],
  'important': ['paramount', 'crucial', 'imperative', 'indispensable'],
  'a lot of': ['a substantial proportion of', 'numerous', 'a multitude of']
};

function matchAcademicStem(word) {
  if (ACADEMIC_WORD_LIST.has(word)) return word;
  
  // Common suffixes to strip or substitute
  const candidates = [];
  
  // Plurals and simple endings
  if (word.endsWith('ies') && word.length > 5) candidates.push(word.slice(0, -3) + 'y');
  if (word.endsWith('ied') && word.length > 5) candidates.push(word.slice(0, -3) + 'y');
  if (word.endsWith('es') && word.length > 4) candidates.push(word.slice(0, -2));
  if (word.endsWith('s') && !word.endsWith('ss') && word.length > 3) candidates.push(word.slice(0, -1));
  
  // Participles and past tense
  if (word.endsWith('ing') && word.length > 5) {
    candidates.push(word.slice(0, -3));
    candidates.push(word.slice(0, -3) + 'e');
  }
  if (word.endsWith('ed') && word.length > 4) {
    candidates.push(word.slice(0, -2));
    candidates.push(word.slice(0, -1)); // e.g. allocated -> allocate
  }

  // Adverbial & adjectival derivations
  if (word.endsWith('ly') && word.length > 4) candidates.push(word.slice(0, -2));
  if (word.endsWith('ical') && word.length > 6) {
    candidates.push(word.slice(0, -4) + 'y'); // technological -> technology
    candidates.push(word.slice(0, -4));
  }
  if (word.endsWith('ic') && word.length > 4) {
    candidates.push(word.slice(0, -2) + 'y'); // economic -> economy
    candidates.push(word.slice(0, -2));
  }

  // Nominalizations
  if (word.endsWith('tion') || word.endsWith('sion')) {
    candidates.push(word.slice(0, -4) + 'te');
    candidates.push(word.slice(0, -4) + 't');
    candidates.push(word.slice(0, -4) + 'de');
    candidates.push(word.slice(0, -3));
  }
  if (word.endsWith('ment') && word.length > 6) candidates.push(word.slice(0, -4));
  if (word.endsWith('ity') && word.length > 5) candidates.push(word.slice(0, -3) + 'e');

  for (const cand of candidates) {
    if (ACADEMIC_WORD_LIST.has(cand)) return cand;
  }
  return null;
}

export function evaluateLexicalResource(tokenized) {
  const { words, wordCount, text } = tokenized;
  const lowerText = text.toLowerCase();
  
  const strengths = [];
  const areasToImprove = [];
  const suggestedUpgrades = [];
  let score = 7.0;

  // 1. Unique words and Type-Token Ratio
  const uniqueWords = new Set(words);
  const ttr = wordCount > 0 ? uniqueWords.size / wordCount : 0;

  // 2. AWL & C1/C2 Analysis
  const foundAwl = new Set();
  const foundAdvanced = new Set();

  for (const word of words) {
    const matchedStem = matchAcademicStem(word);
    if (matchedStem) {
      foundAwl.add(matchedStem);
    }
    if (ADVANCED_DESCRIPTORS.has(word)) {
      foundAdvanced.add(word);
    }
  }

  const awlCount = foundAwl.size;
  const awlDensity = wordCount > 0 ? Number(((awlCount / wordCount) * 100).toFixed(1)) : 0;

  if (wordCount < 50) {
    return {
      score: Math.min(3.5, Math.max(1.0, Number((wordCount / 15).toFixed(1)))),
      strengths: [],
      areasToImprove: ['Insufficient vocabulary sample for academic evaluation.'],
      awlWords: Array.from(foundAwl),
      awlCount,
      awlDensity,
      ttr: Number(ttr.toFixed(2)),
      suggestedUpgrades: []
    };
  }

  // Band Score Calculations
  if (awlCount >= 18 || (awlCount >= 12 && foundAdvanced.size >= 2)) {
    score += 1.0;
    strengths.push(`Rich deployment of Academic Word List vocabulary (${awlCount} unique academic stems, e.g., ${Array.from(foundAwl).slice(0, 4).join(', ')}).`);
  } else if (awlCount >= 10) {
    score += 0.5;
    strengths.push(`Good academic register with ${awlCount} distinct AWL terms utilized.`);
  } else if (awlCount < 6) {
    score -= 1.0;
    areasToImprove.push(`Low academic vocabulary density (only ${awlCount} academic stems identified). Integrate formal register collocations.`);
  }

  if (foundAdvanced.size > 0) {
    strengths.push(`Sophisticated C1/C2 descriptors employed (${Array.from(foundAdvanced).join(', ')}).`);
    score += 0.5;
  }

  if (ttr >= 0.50) {
    strengths.push(`Strong lexical variety with minimal repetitive phrasing (TTR: ${(ttr * 100).toFixed(0)}%).`);
    score += 0.5;
  } else if (ttr < 0.38) {
    areasToImprove.push(`High lexical repetition: Type-Token Ratio is ${(ttr * 100).toFixed(0)}%. Avoid recycling the same common words.`);
    score -= 0.5;
  }

  // 3. Scan for upgrade suggestions
  for (const [basicWord, replacements] of Object.entries(UPGRADE_DICTIONARY)) {
    const regex = new RegExp(`\\b${basicWord}\\b`, 'gi');
    if (regex.test(lowerText)) {
      suggestedUpgrades.push({
        basic: basicWord,
        replacements: replacements.slice(0, 3)
      });
    }
  }

  const finalScore = Math.max(1.0, Math.min(9.0, Math.round(score * 2) / 2));

  return {
    score: finalScore,
    strengths,
    areasToImprove,
    awlWords: Array.from(foundAwl),
    awlCount,
    awlDensity,
    ttr: Number(ttr.toFixed(2)),
    suggestedUpgrades: suggestedUpgrades.slice(0, 5)
  };
}
