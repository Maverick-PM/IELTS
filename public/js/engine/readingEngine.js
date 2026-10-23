// IELTS Academic Reading Offline Scoring Engine
// Evaluates user answers against answer keys and generates official Band score & feedback

import { rawToReadingBand } from '../data/readingTests.js';

export function normalizeAnswer(ans) {
  if (ans === undefined || ans === null) return '';
  return String(ans)
    .trim()
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    .replace(/\s+/g, ' ');
}

export function evaluateReadingTest(test, userAnswers = {}) {
  let rawScore = 0;
  const questionResults = [];

  let allQuestions = [];
  test.passages.forEach(passage => {
    allQuestions = allQuestions.concat(passage.questions);
  });

  const totalQuestions = allQuestions.length;

  for (const q of allQuestions) {
    const rawUserAns = userAnswers[q.id] || '';
    const cleanUser = normalizeAnswer(rawUserAns);
    const cleanCorrect = normalizeAnswer(q.answer);

    let isCorrect = false;

    if (cleanUser.length > 0) {
      if (cleanUser === cleanCorrect) {
        isCorrect = true;
      } else if (Array.isArray(q.acceptableAnswers)) {
        isCorrect = q.acceptableAnswers.some(acc => normalizeAnswer(acc) === cleanUser);
      }
    }

    if (isCorrect) {
      rawScore++;
    }

    questionResults.push({
      id: q.id,
      number: q.number,
      type: q.type,
      prompt: q.prompt,
      userAnswer: rawUserAns,
      correctAnswer: q.answer,
      isCorrect,
      explanation: q.explanation
    });
  }

  // Calculate official Band score
  const band = rawToReadingBand(rawScore, totalQuestions);

  // Generate diagnostic summary
  const strengths = [];
  const areasToImprove = [];

  const correctByType = {};
  const totalByType = {};

  questionResults.forEach(r => {
    totalByType[r.type] = (totalByType[r.type] || 0) + 1;
    if (r.isCorrect) {
      correctByType[r.type] = (correctByType[r.type] || 0) + 1;
    }
  });

  for (const [type, total] of Object.entries(totalByType)) {
    const correct = correctByType[type] || 0;
    const pct = (correct / total) * 100;
    const typeLabel = type === 'tfng' ? 'True/False/Not Given' : (type === 'fill-blank' ? 'Sentence Completion' : (type === 'multiple-choice' ? 'Multiple Choice' : 'Matching Headings'));

    if (pct >= 80) {
      strengths.push(`High accuracy (${correct}/${total}) in ${typeLabel} questions.`);
    } else if (pct < 60) {
      areasToImprove.push(`Review strategies for ${typeLabel} questions (${correct}/${total} correct). Focus on scanning keywords in the text.`);
    }
  }

  if (band >= 8.0) {
    strengths.push('Demonstrates excellent academic scanning speed and deep contextual comprehension.');
  } else if (band >= 6.5) {
    strengths.push('Solid overall comprehension; practice verifying subtle qualifiers like "always" vs "often".');
  } else {
    areasToImprove.push('Target reading speed and vocabulary acquisition to finish within the 60-minute limit.');
  }

  return {
    rawScore,
    totalQuestions,
    band,
    questionResults,
    strengths,
    areasToImprove
  };
}
