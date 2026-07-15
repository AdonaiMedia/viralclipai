interface CTAResult {
  found: boolean;
  ctas: string[];
}

const CTA_KEYWORDS = [
  "subscribe",
  "like",
  "share",
  "comment",
  "follow",
  "save",
  "download",
  "click",
  "join",
  "watch",
  "visit",

  "subscribe now",
  "follow me",
  "check bio",

  "jiunge",
  "subscribe",
  "like",
  "comment",
  "share",
  "fuata",
  "bonyeza",
  "tembelea",
  "angalia",
  "pakua",
  "hifadhi",
  "toa maoni",
];

export async function detectCTA(
  transcript: string
): Promise<CTAResult> {

  const text = transcript.toLowerCase();

  const foundCTAs: string[] = [];

  for (const keyword of CTA_KEYWORDS) {

    if (
      text.includes(keyword) &&
      !foundCTAs.includes(keyword)
    ) {
      foundCTAs.push(keyword);
    }

  }

  return {
    found: foundCTAs.length > 0,
    ctas: foundCTAs,
  };
}