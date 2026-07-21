export interface MockTranslateResult {
  success: boolean;
  translation: string;
}

const TRANSLATIONS = [
  "Mungu ana mpango mzuri kwa maisha yako. Endelea kuwa na imani.",
  "Usikate tamaa. Yesu yupo pamoja nawe katika kila hatua.",
  "Neno la Mungu ni taa ya miguu yetu na mwanga wa njia yetu.",
  "Endelea kuomba, kuamini na kumtumaini Mungu kila siku."
];

export async function generateMockTranslation(): Promise<MockTranslateResult> {
  const translation =
    TRANSLATIONS[Math.floor(Math.random() * TRANSLATIONS.length)];

  await new Promise((resolve) =>
    setTimeout(resolve, 1000)
  );

  return {
    success: true,
    translation,
  };
}