export interface MockHookResult {
  success: boolean;
  hook: string;
}

const HOOKS = [
  "Wait... you need to hear this!",
  "Don't scroll before watching this.",
  "This message could change your life.",
  "Most people don't know this Bible truth.",
  "Watch until the end.",
  "This surprised thousands of Christians.",
  "You won't believe what happens next.",
  "God has a message for you today.",
];

export async function generateMockHook(): Promise<MockHookResult> {
  const hook =
    HOOKS[Math.floor(Math.random() * HOOKS.length)];

  await new Promise((resolve) =>
    setTimeout(resolve, 1200)
  );

  return {
    success: true,
    hook,
  };
}