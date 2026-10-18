import { tokenize } from './tokenizer.js';
import { evaluateTaskAchievement } from './taskAchievement.js';
import { evaluateCoherenceCohesion } from './coherenceCohesion.js';
import { evaluateLexicalResource } from './lexicalResource.js';
import { evaluateGrammaticalRange } from './grammaticalRange.js';

/**
 * Rounds composite IELTS score according to official British Council / IDP rules:
 * - If average ends in .25 -> rounds up to .5
 * - If average ends in .75 -> rounds up to next whole band
 * Examples:
 * 6.25 -> 6.5
 * 6.75 -> 7.0
 * 6.125 -> 6.0
 * 6.375 -> 6.5
 * 6.625 -> 6.5
 * 6.875 -> 7.0
 */
export function roundIELTSScore(rawScore) {
  const integerPart = Math.floor(rawScore);
  const fraction = rawScore - integerPart;

  if (fraction < 0.25) {
    return integerPart;
  } else if (fraction < 0.75) {
    return integerPart + 0.5;
  } else {
    return integerPart + 1.0;
  }
}

export function evaluateEssay(text, prompt, taskType = 'task2') {
  const tokenized = tokenize(text);

  const trResult = evaluateTaskAchievement(tokenized, prompt, taskType);
  const ccResult = evaluateCoherenceCohesion(tokenized, taskType);
  const lrResult = evaluateLexicalResource(tokenized);
  const graResult = evaluateGrammaticalRange(tokenized);

  const rawAverage = (trResult.score + ccResult.score + lrResult.score + graResult.score) / 4;
  const overallBand = Math.max(1.0, Math.min(9.0, roundIELTSScore(rawAverage)));

  // Combine unique feedback
  const allStrengths = [
    ...trResult.strengths,
    ...ccResult.strengths,
    ...lrResult.strengths,
    ...graResult.strengths
  ];

  const allAreasToImprove = [
    ...trResult.areasToImprove,
    ...ccResult.areasToImprove,
    ...lrResult.areasToImprove,
    ...graResult.areasToImprove
  ];

  return {
    taskType,
    wordCount: tokenized.wordCount,
    sentenceCount: tokenized.sentenceCount,
    paragraphCount: tokenized.paragraphCount,
    scores: {
      overall: overallBand,
      tr: trResult.score,
      cc: ccResult.score,
      lr: lrResult.score,
      gra: graResult.score,
      rawAverage: Number(rawAverage.toFixed(2))
    },
    metrics: {
      awlCount: lrResult.awlCount,
      awlDensity: lrResult.awlDensity,
      ttr: lrResult.ttr,
      cohesiveCount: ccResult.cohesiveCount,
      complexSentenceRatio: graResult.complexSentenceRatio,
      passiveCount: graResult.passiveCount
    },
    feedback: {
      strengths: allStrengths,
      areasToImprove: allAreasToImprove,
      suggestedUpgrades: lrResult.suggestedUpgrades,
      awlWordsFound: lrResult.awlWords
    }
  };
}
