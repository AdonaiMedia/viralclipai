export interface OAuthToken {

  accessToken: string;

  refreshToken?: string;

  expiresAt?: Date;

}

export async function authorizePlatform(

  platform: string

): Promise<OAuthToken> {

  console.log("================================");
  console.log("OAUTH MANAGER");
  console.log("================================");

  console.log(platform);

  /*
    Phase 2

    Google OAuth
    Facebook OAuth
    TikTok OAuth
  */

  return {

    accessToken: "demo-access-token",

    refreshToken: "demo-refresh-token",

    expiresAt: new Date(),

  };

}