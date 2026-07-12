const EMOTION_KEYWORDS = {
  spiritual: [
    "god",
    "jesus",
    "holy",
    "faith",
    "prayer",
    "worship",
    "mungu",
    "yesu",
    "imani",
    "maombi",
    "ibada",
    "roho",
    "biblia",
  ],

  motivation: [
    "success",
    "believe",
    "dream",
    "focus",
    "future",
    "goal",
    "win",
    "motivation",
    "fanikiwa",
    "ushindi",
    "ndoto",
    "mafanikio",
    "jitahidi",
  ],

  happy: [
    "happy",
    "joy",
    "celebrate",
    "smile",
    "laugh",
    "furaha",
    "shangwe",
    "tabasamu",
  ],

  sad: [
    "cry",
    "pain",
    "death",
    "loss",
    "fear",
    "sad",
    "lia",
    "huzuni",
    "maumivu",
    "kifo",
  ],

  educational: [
    "learn",
    "lesson",
    "education",
    "teach",
    "explain",
    "study",
    "fundisha",
    "elimisha",
    "somo",
    "maarifa",
  ],

  funny: [
    "funny",
    "joke",
    "laugh",
    "comedy",
    "meme",
    "utani",
    "vichekesho",
  ],

  angry: [
    "angry",
    "hate",
    "fight",
    "war",
    "attack",
    "hasira",
    "vita",
    "pigana",
  ],
};

export async function analyzeEmotion(
  transcript: string
): Promise<string> {

  if (!transcript.trim()) {
    return "neutral";
  }

  const text = transcript.toLowerCase();

  let winner = "neutral";
  let highestScore = 0;

  for (const [emotion, words] of Object.entries(EMOTION_KEYWORDS)) {

    let score = 0;

    for (const word of words) {

      if (text.includes(word)) {
        score++;
      }

    }

    if (score > highestScore) {
      highestScore = score;
      winner = emotion;
    }

  }

  return winner;
}