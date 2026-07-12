const SWAHILI_WORDS = [
  "mungu",
  "yesu",
  "kanisa",
  "maombi",
  "biblia",
  "leo",
  "kesho",
  "kweli",
  "karibu",
  "ndiyo",
  "hapana",
  "mtoto",
  "watoto",
  "upendo",
  "amani",
  "baraka",
  "roho",
  "mtakatifu",
  "habari",
  "asante",
];

const ENGLISH_WORDS = [
  "god",
  "jesus",
  "church",
  "bible",
  "prayer",
  "today",
  "tomorrow",
  "love",
  "peace",
  "welcome",
  "thank",
  "people",
  "family",
  "children",
  "video",
  "content",
  "business",
  "success",
  "faith",
  "holy",
];

export async function analyzeLanguage(
  transcript: string
): Promise<string> {

  if (!transcript.trim()) {
    return "unknown";
  }

  const text = transcript.toLowerCase();

  let swahili = 0;
  let english = 0;

  for (const word of SWAHILI_WORDS) {
    if (text.includes(word)) {
      swahili++;
    }
  }

  for (const word of ENGLISH_WORDS) {
    if (text.includes(word)) {
      english++;
    }
  }

  if (swahili === 0 && english === 0) {
    return "unknown";
  }

  if (swahili > 0 && english > 0) {
    return "mixed";
  }

  if (swahili > english) {
    return "sw";
  }

  return "en";
}