interface CategoryRule {
  category: string;
  keywords: string[];
}

const CATEGORY_RULES: CategoryRule[] = [
  {
    category: "Faith",
    keywords: [
      "god",
      "jesus",
      "church",
      "bible",
      "prayer",
      "gospel",
      "mungu",
      "yesu",
      "kanisa",
      "biblia",
      "maombi",
      "injili",
    ],
  },

  {
    category: "Business",
    keywords: [
      "business",
      "marketing",
      "sales",
      "money",
      "profit",
      "startup",
      "finance",
      "biashara",
      "fedha",
    ],
  },

  {
    category: "Education",
    keywords: [
      "learn",
      "lesson",
      "course",
      "tutorial",
      "education",
      "school",
      "study",
      "fundisha",
      "elimisha",
      "somo",
    ],
  },

  {
    category: "Technology",
    keywords: [
      "ai",
      "artificial intelligence",
      "react",
      "nextjs",
      "typescript",
      "javascript",
      "software",
      "coding",
      "developer",
      "programming",
    ],
  },

  {
    category: "Health",
    keywords: [
      "health",
      "doctor",
      "fitness",
      "exercise",
      "diet",
      "hospital",
      "afya",
      "mazoezi",
    ],
  },

  {
    category: "Entertainment",
    keywords: [
      "music",
      "movie",
      "comedy",
      "funny",
      "dance",
      "song",
      "entertainment",
      "burudani",
    ],
  },

  {
    category: "Sports",
    keywords: [
      "football",
      "soccer",
      "basketball",
      "goal",
      "match",
      "premier league",
      "sports",
      "mchezo",
    ],
  },
];

export async function detectCategory(
  transcript: string
): Promise<string> {

  if (!transcript.trim()) {
    return "General";
  }

  const text = transcript.toLowerCase();

  let bestCategory = "General";
  let highestScore = 0;

  for (const rule of CATEGORY_RULES) {

    let score = 0;

    for (const keyword of rule.keywords) {

      if (text.includes(keyword)) {
        score++;
      }

    }

    if (score > highestScore) {
      highestScore = score;
      bestCategory = rule.category;
    }

  }

  return bestCategory;
}