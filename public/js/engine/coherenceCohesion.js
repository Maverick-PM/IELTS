import { COHESIVE_DEVICES } from '../data/cohesiveDevices.js';

export function evaluateCoherenceCohesion(tokenized, taskType = 'task2') {
  const { paragraphCount, paragraphs, words, text, wordCount } = tokenized;
  const lowerText = text.toLowerCase();
  
  const strengths = [];
  const areasToImprove = [];
  let score = 7.0;

  if (wordCount < 50) {
    return {
      score: Math.min(3.5, Math.max(1.0, Number((wordCount / 15).toFixed(1)))),
      strengths: [],
      areasToImprove: ['Insufficient length to establish coherence or paragraph structure.'],
      cohesiveCount: 0,
      categoriesUsed: []
    };
  }

  // 1. Paragraphing Analysis
  const idealParagraphs = taskType === 'task1' ? [3, 4] : [4, 5];
  if (paragraphCount === 1) {
    score = Math.min(score, 5.0);
    areasToImprove.push('Single unbroken block of text: lack of paragraphing caps Coherence & Cohesion at Band 5.0.');
  } else if (paragraphCount < idealParagraphs[0]) {
    score -= 0.5;
    areasToImprove.push(`Contains only ${paragraphCount} paragraphs. Standard IELTS structure requires ${idealParagraphs[0]}–${idealParagraphs[1]} paragraphs.`);
  } else if (paragraphCount > 6) {
    score -= 0.5;
    areasToImprove.push('Over-fragmented: essay contains too many short, isolated paragraphs.');
  } else {
    strengths.push(`Clear, logical paragraph division (${paragraphCount} balanced paragraphs).`);
    score += 0.5;
  }

  // 2. Cohesive Device Detection
  const foundDevices = [];
  const categoriesUsed = [];
  const deviceCounts = {};

  for (const [category, devices] of Object.entries(COHESIVE_DEVICES)) {
    let categoryHits = 0;
    for (const device of devices) {
      // Regex boundary search
      const regex = new RegExp(`\\b${device}\\b`, 'gi');
      const matches = lowerText.match(regex);
      if (matches) {
        categoryHits += matches.length;
        deviceCounts[device] = (deviceCounts[device] || 0) + matches.length;
        foundDevices.push({ device, count: matches.length, category });
      }
    }
    if (categoryHits > 0) {
      categoriesUsed.push(category);
    }
  }

  const totalCohesiveHits = Object.values(deviceCounts).reduce((a, b) => a + b, 0);

  if (categoriesUsed.length >= 4 && totalCohesiveHits >= 6) {
    strengths.push(`Displays a flexible, wide range of cohesive devices across ${categoriesUsed.length} categories (${categoriesUsed.slice(0, 3).join(', ')}).`);
    score += 0.5;
  } else if (categoriesUsed.length <= 2) {
    areasToImprove.push('Limited variety of linking words. Incorporate more diverse contrast, result, and addition devices.');
    score -= 0.5;
  }

  // Check for mechanical overuse / repetition of the same device
  const overused = Object.entries(deviceCounts).filter(([_, count]) => count >= 4);
  if (overused.length > 0) {
    areasToImprove.push(`Mechanical repetition of linker "${overused[0][0]}" (${overused[0][1]} times). Vary your transitional phrasing.`);
    score -= 0.5;
  }

  const finalScore = Math.max(1.0, Math.min(9.0, Math.round(score * 2) / 2));

  return {
    score: finalScore,
    strengths,
    areasToImprove,
    cohesiveCount: totalCohesiveHits,
    categoriesUsed,
    foundDevices: foundDevices.slice(0, 8)
  };
}
