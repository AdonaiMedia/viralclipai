export interface ViralAnalysis {
  start: number;
  end: number;
  title: string;
  reason: string;
  score?: number;
}

export interface ViralScore {
  start: number;
  end: number;
  title: string;
  reason: string;

  hookScore: number;
  emotionScore: number;
  storyScore: number;
  engagementScore: number;

  viralScore: number;
}

const POWER_WORDS = [
  "mungu",
  "yesu",
  "roho",
  "imani",
  "neema",
  "baraka",
  "muujiza",
  "ushindi",
  "uponyaji",
  "upendo",
  "hope",
  "faith",
  "miracle",
  "blessing",
  "god",
];

const HOOK_WORDS = [
  "subiri",
  "usipite",
  "huwezi kuamini",
  "leo",
  "sikiliza",
  "angalia",
  "kwa nini",
  "unajua",
  "secret",
  "listen",
];

const CTA_WORDS = [
  "share",
  "comment",
  "subscribe",
  "follow",
  "amen",
  "andika amen",
  "like",
];

export function ViralScoringEngine(
  clips: ViralAnalysis[]
): ViralScore[] {

  return clips.map((clip) => {

    let hookScore = 35;
    let emotionScore = 35;
    let storyScore = 35;
    let engagementScore = 35;

    const text =
      `${clip.title} ${clip.reason}`.toLowerCase();

    // Power words
    POWER_WORDS.forEach(word => {
      if (text.includes(word)) {
        emotionScore += 8;
        hookScore += 4;
      }
    });

    // Hook words
    HOOK_WORDS.forEach(word => {
      if (text.includes(word)) {
        hookScore += 10;
      }
    });

    // CTA
    CTA_WORDS.forEach(word => {
      if (text.includes(word)) {
        engagementScore += 12;
      }
    });

    // Story length
    if (text.length > 50) storyScore += 8;
    if (text.length > 100) storyScore += 8;

    // Questions
    if (text.includes("?")) engagementScore += 5;

    // Excitement
    if (text.includes("!")) emotionScore += 5;

    // Clamp 0–100
    hookScore = Math.min(hookScore, 100);
    emotionScore = Math.min(emotionScore, 100);
    storyScore = Math.min(storyScore, 100);
    engagementScore = Math.min(engagementScore, 100);

    const viralScore = Math.round(
      (
        hookScore +
        emotionScore +
        storyScore +
        engagementScore
      ) / 4
    );

    return {
      ...clip,
      hookScore,
      emotionScore,
      storyScore,
      engagementScore,
      viralScore,
    };

  });

}