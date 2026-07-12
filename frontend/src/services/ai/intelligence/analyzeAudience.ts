const AUDIENCE_RULES = [
  {
    audience: "Christians",
    keywords: [
      "god",
      "jesus",
      "faith",
      "church",
      "bible",
      "prayer",
      "gospel",
      "mungu",
      "yesu",
      "biblia",
      "kanisa",
      "maombi",
      "injili",
      "imani",
    ],
  },

  {
    audience: "Business",
    keywords: [
      "business",
      "money",
      "sales",
      "marketing",
      "startup",
      "entrepreneur",
      "finance",
      "profit",
      "uwekezaji",
      "biashara",
      "fedha",
      "mauzo",
    ],
  },

  {
    audience: "Students",
    keywords: [
      "study",
      "school",
      "education",
      "lesson",
      "teacher",
      "exam",
      "college",
      "student",
      "somo",
      "wanafunzi",
      "mtihani",
      "elimisha",
    ],
  },

  {
    audience: "Gamers",
    keywords: [
      "game",
      "gaming",
      "ps5",
      "xbox",
      "minecraft",
      "pubg",
      "freefire",
      "call of duty",
    ],
  },

  {
    audience: "Kids",
    keywords: [
      "kids",
      "children",
      "cartoon",
      "toy",
      "family",
      "watoto",
      "katuni",
    ],
  },

  {
    audience: "Developers",
    keywords: [
      "javascript",
      "typescript",
      "react",
      "nextjs",
      "coding",
      "developer",
      "programming",
      "node",
      "api",
      "database",
    ],
  },
];

export async function analyzeAudience(
  transcript: string
): Promise<string> {

  if (!transcript.trim()) {
    return "General Audience";
  }

  const text = transcript.toLowerCase();

  let bestAudience = "General Audience";
  let bestScore = 0;

  for (const rule of AUDIENCE_RULES) {

    let score = 0;

    for (const keyword of rule.keywords) {

      if (text.includes(keyword)) {
        score++;
      }

    }

    if (score > bestScore) {
      bestScore = score;
      bestAudience = rule.audience;
    }

  }

  return bestAudience;
}