// Grammatical Range and Accuracy (GRA) Evaluator

const SUBORDINATION_MARKERS = [
  'although', 'even though', 'though', 'whereas', 'while', 'because', 'since',
  'provided that', 'as long as', 'in order that', 'so that', 'despite the fact that'
];

const RELATIVE_MARKERS = [
  'which', 'that', 'who', 'whom', 'whose', 'whereby', 'wherein'
];

export function evaluateGrammaticalRange(tokenized) {
  const { sentences, wordCount, text } = tokenized;
  const lowerText = text.toLowerCase();
  
  const strengths = [];
  const areasToImprove = [];
  let score = 7.0;

  if (wordCount < 50) {
    return {
      score: Math.min(3.5, Math.max(1.0, Number((wordCount / 15).toFixed(1)))),
      strengths: [],
      areasToImprove: ['Grammatical structure sample is too brief to evaluate.'],
      complexSentenceRatio: 0,
      passiveCount: 0,
      runOnCount: 0
    };
  }

  // 1. Sentence Length and Variance Analysis
  const sentenceLengths = sentences.map(s => s.trim().split(/\s+/).filter(w => w.length > 0).length);
  const avgLength = sentenceLengths.reduce((a, b) => a + b, 0) / (sentenceLengths.length || 1);

  // Measure variance
  let variance = 0;
  for (const len of sentenceLengths) {
    variance += Math.pow(len - avgLength, 2);
  }
  const stdDev = Math.sqrt(variance / (sentenceLengths.length || 1));

  if (stdDev >= 6.0 && avgLength >= 15 && avgLength <= 28) {
    strengths.push(`Excellent variation in sentence length (mixing concise impact statements with complex structures, average: ${avgLength.toFixed(0)} words/sentence).`);
    score += 0.5;
  } else if (stdDev < 3.0) {
    areasToImprove.push('Monotonous sentence rhythm: sentence lengths are repetitive. Combine simple sentences into compound-complex structures.');
    score -= 0.5;
  }

  // 2. Complex Sentence & Subordination Density
  let complexCount = 0;
  for (const sentence of sentences) {
    const sLower = sentence.toLowerCase();
    const hasSub = SUBORDINATION_MARKERS.some(m => sLower.includes(m));
    const hasRel = RELATIVE_MARKERS.some(m => sLower.includes(m));
    const hasSemicolon = sentence.includes(';') || (sentence.includes(',') && sentence.split(' ').length > 14);

    if (hasSub || hasRel || hasSemicolon) {
      complexCount++;
    }
  }

  const complexRatio = complexCount / (sentences.length || 1);

  if (complexRatio >= 0.60) {
    strengths.push(`Frequent and accurate use of complex sentences (${(complexRatio * 100).toFixed(0)}% of sentences contain subordinate or relative clauses).`);
    score += 0.5;
  } else if (complexRatio < 0.35) {
    areasToImprove.push('Predominance of simple coordinate clauses. Practice using concessive clauses (e.g., "Although...", "Whereas...").');
    score -= 0.5;
  }

  // 3. Passive Voice Detection
  const passiveMatches = text.match(/\b(is|are|was|were|been|being)\s+([a-z]+ed|[a-z]+en)\b/gi) || [];
  const passiveCount = passiveMatches.length;

  if (passiveCount >= 3) {
    strengths.push(`Appropriate use of objective passive voice constructions (${passiveCount} instances, e.g., "${passiveMatches[0]}").`);
    score += 0.5;
  }

  // 4. Run-on Sentences / Punctuation Integrity
  const runOnSentences = sentenceLengths.filter(len => len > 45);
  if (runOnSentences.length > 0) {
    areasToImprove.push(`Detected ${runOnSentences.length} run-on sentence(s) exceeding 45 words without terminal punctuation. Split into focused sentences.`);
    score -= 0.5;
  }

  const finalScore = Math.max(1.0, Math.min(9.0, Math.round(score * 2) / 2));

  return {
    score: finalScore,
    strengths,
    areasToImprove,
    complexSentenceRatio: Number(complexRatio.toFixed(2)),
    passiveCount,
    runOnCount: runOnSentences.length
  };
}
