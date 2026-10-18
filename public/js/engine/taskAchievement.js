import { TASK1_OVERVIEW_MARKERS, TASK2_THESIS_MARKERS } from '../data/cohesiveDevices.js';

export function evaluateTaskAchievement(tokenized, prompt, taskType = 'task2') {
  const { wordCount, paragraphs, text } = tokenized;
  const lowerText = text.toLowerCase();
  const minWords = taskType === 'task1' ? 150 : 250;
  
  const strengths = [];
  const areasToImprove = [];
  let score = 7.0; // baseline

  // 1. Extreme short length check (< 50 words)
  if (wordCount < 50) {
    return {
      score: Math.min(3.5, Math.max(1.0, Number((wordCount / 15).toFixed(1)))),
      strengths: [],
      areasToImprove: [
        `Critically insufficient word count (${wordCount} words). The minimum required is ${minWords} words.`
      ],
      hasOverview: false,
      hasThesis: false
    };
  }

  // 2. Word Count Threshold Penalty
  if (wordCount < minWords) {
    const deficit = minWords - wordCount;
    if (deficit > 80) {
      score -= 2.5;
      areasToImprove.push(`Severe length penalty: written ${wordCount} words (${deficit} words below the ${minWords}-word minimum).`);
    } else if (deficit > 40) {
      score -= 1.5;
      areasToImprove.push(`Noticeable length penalty: written ${wordCount} words (${deficit} words below the ${minWords}-word minimum).`);
    } else {
      score -= 0.5;
      areasToImprove.push(`Slightly under-length: written ${wordCount} words (aim for at least ${minWords} words to avoid penalty).`);
    }
  } else if (wordCount >= minWords + 30) {
    strengths.push(`Fully satisfies required length (${wordCount} words vs ${minWords} minimum).`);
    score += 0.5;
  }

  // 3. Task-specific criteria
  let hasOverview = false;
  let hasThesis = false;

  if (taskType === 'task1') {
    // Task 1: Check for an overview paragraph or sentence
    hasOverview = TASK1_OVERVIEW_MARKERS.some(marker => lowerText.includes(marker));
    
    // Check if numbers/data figures are cited
    const numberMatches = text.match(/\b\d+(?:\.\d+)?%?|\b(one|two|three|four|five)\b/gi) || [];
    const hasDataCitations = numberMatches.length >= 4;

    if (hasOverview) {
      strengths.push('Presents a clear overview statement summarizing principal trends or key features.');
      score += 0.5;
    } else {
      areasToImprove.push('Missing explicit Overview paragraph. Per official IELTS guidelines, omitting an overview caps Task Achievement at Band 5.0.');
      score = Math.min(score, 5.0);
    }

    if (hasDataCitations) {
      strengths.push('Effectively supports observations with relevant numerical data from the visual.');
    } else {
      areasToImprove.push('Insufficient specific data points cited from the visual chart.');
      score -= 0.5;
    }
  } else {
    // Task 2: Check for thesis statement in introduction & conclusion
    const intro = (paragraphs[0] || '').toLowerCase();
    const conclusion = (paragraphs[paragraphs.length - 1] || '').toLowerCase();

    hasThesis = TASK2_THESIS_MARKERS.some(marker => intro.includes(marker));
    const hasConclusionMarker = ['in conclusion', 'to conclude', 'to summarize', 'in summary'].some(m => conclusion.includes(m));

    if (hasThesis) {
      strengths.push('Establishes a distinct, articulate position/thesis in the opening introduction.');
      score += 0.5;
    } else {
      areasToImprove.push('Introduction lacks an explicit thesis statement outlining your definitive stance.');
      score -= 0.5;
    }

    if (hasConclusionMarker && paragraphs.length >= 3) {
      strengths.push('Features a structured conclusion summarizing central arguments effectively.');
    } else {
      areasToImprove.push('Conclusion is either missing, abrupt, or lacks explicit concluding phrasing.');
      score -= 0.5;
    }

    // Keyword coverage from prompt
    if (prompt && prompt.sampleKeywords) {
      const matchedKeywords = prompt.sampleKeywords.filter(k => lowerText.includes(k.toLowerCase()));
      if (matchedKeywords.length >= 2) {
        strengths.push(`Directly addresses topic themes using key concepts (${matchedKeywords.slice(0, 3).join(', ')}).`);
        score += 0.5;
      }
    }
  }

  // Clamp score between 1.0 and 9.0
  const finalScore = Math.max(1.0, Math.min(9.0, Math.round(score * 2) / 2));

  return {
    score: finalScore,
    strengths,
    areasToImprove,
    hasOverview,
    hasThesis
  };
}
