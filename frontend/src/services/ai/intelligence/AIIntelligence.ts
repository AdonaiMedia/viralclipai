import { analyzeTopic } from "./analyzeTopic";
import { analyzeEmotion } from "./analyzeEmotion";
import { analyzeAudience } from "./analyzeAudience";
import { analyzeLanguage } from "./analyzeLanguage";
import { analyzeKeywords } from "./analyzeKeywords";
import { summarizeTranscript } from "./summarizeTranscript";
import { detectCategory } from "./detectCategory";
import { detectCTA } from "./detectCTA";
import { recommendPlatforms } from "./recommendPlatforms";
import { recommendPostingTime } from "./recommendPostingTime";
import { estimateViralProbability } from "./estimateViralProbability";
import { seoOptimizer } from "./seoOptimizer";

export interface AIIntelligenceResult {
  topic: string;
  summary: string;
  emotion: string;
  audience: string;
  language: string;
  keywords: string[];
  category: string;

  cta: {
    found: boolean;
    ctas: string[];
  };

  recommendedPlatforms: string[];

  recommendedPostingTime: {
    bestTime: string;
    timezone: string;
    reason: string;
  };

  viralProbability: {
    score: number;
    level: "Low" | "Medium" | "High" | "Very High";
  };

  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export async function runAIIntelligence(
  transcript: string
): Promise<AIIntelligenceResult> {

  console.log("================================");
  console.log("AI INTELLIGENCE ENGINE");
  console.log("================================");

  const topic =
    await analyzeTopic(transcript);

  const emotion =
    await analyzeEmotion(transcript);

  const audience =
    await analyzeAudience(transcript);

  const language =
    await analyzeLanguage(transcript);

  const keywords =
    await analyzeKeywords(transcript);

  const summary =
    await summarizeTranscript(transcript);

  const category =
    await detectCategory(transcript);

  const cta =
    await detectCTA(transcript);

  const recommendedPlatforms =
    await recommendPlatforms(transcript);

  const recommendedPostingTime =
    await recommendPostingTime(category);

  const viralProbability =
    await estimateViralProbability(
      70,
      emotion,
      cta.found
    );

  const seo =
    await seoOptimizer(
      topic,
      summary,
      keywords
    );

  return {
    topic,
    summary,
    emotion,
    audience,
    language,
    keywords,
    category,
    cta,
    recommendedPlatforms,
    recommendedPostingTime,
    viralProbability,
    seo,
  };
}