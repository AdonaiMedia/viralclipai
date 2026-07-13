import { OAuthToken } from "./OAuthManager";

export async function saveToken(

  userId: string,

  platform: string,

  token: OAuthToken

): Promise<boolean> {

  console.log("================================");
  console.log("SAVE TOKEN");
  console.log("================================");

  console.log(userId);

  console.log(platform);

  return true;

}

export async function loadToken(

  userId: string,

  platform: string

): Promise<OAuthToken | null> {

  console.log("================================");
  console.log("LOAD TOKEN");
  console.log("================================");

  console.log(userId);

  console.log(platform);

  return null;

}