export interface SocialAnalytics {

  views: number;

  likes: number;

  comments: number;

  shares: number;

}

export async function syncAnalytics(

  platform: string,

  postId: string

): Promise<SocialAnalytics> {

  console.log("================================");
  console.log("SYNC ANALYTICS");
  console.log("================================");

  console.log(platform);

  console.log(postId);

  /*
    Phase 2

    YouTube Analytics API
    Facebook Insights
    TikTok Analytics
  */

  return {

    views: 0,

    likes: 0,

    comments: 0,

    shares: 0,

  };

}