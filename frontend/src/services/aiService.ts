import {
  generateCaption,
  generateHashtags,
  generateTitle,
  generateHook,
  generateScript,
  calculateViralScore,
  analyzeTrend,
} from "./ai";

export const AIService = {
  caption: generateCaption,
  hashtags: generateHashtags,
  title: generateTitle,
  hook: generateHook,
  script: generateScript,
  viralScore: calculateViralScore,
  trend: analyzeTrend,
};