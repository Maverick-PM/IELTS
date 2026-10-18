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

export function evaluateLexicalResource(tokenized) {
  const { words, wordCount, text } = tokenized;
  const lowerText = text.toLowerCase();
  
  const strengths = [];
  const areasToImprove = [];
  const suggestedUpgrades = [];
  let score = 7.0;

  if (wordCount < 50) {
    return {
      score: Math.min(3.5, Math.max(1.0, Number((wordCount / 15).toFixed(1)))),
      strengths: [],
      areasToImprove: ['Insufficient vocabulary sample for academic evaluation.'],
      awlWords: [],
      awlCount: 0,
      awlDensity: 0,
      ttr: 0,
      suggestedUpgrades: []
    };
  }

  // 1. Unique words and Type-Token Ratio
  const uniqueWords = new Set(words);
  const ttr = uniqueWords.size / wordCount;

  // 2. AWL & C1/C2 Analysis
  const foundAwl = new Set();
  const foundAdvanced = new Set();

  for (const word of words) {
    if (ACADEMIC_WORD_LIST.has(word)) {
      foundAwl.add(word);
    }
    if (ADVANCED_DESCRIPTORS.has(word)) {
      foundAdvanced.add(word);
    }
  }

  const awlCount = foundAwl.size;
  const awlDensity = Number(((awlCount / wordCount) * 100).toFixed(1));

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
