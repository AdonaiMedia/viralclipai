export interface PostingRecommendation {
  bestTime: string;
  timezone: string;
  reason: string;
}

export async function recommendPostingTime(
  category: string
): Promise<PostingRecommendation> {

  switch (category.toLowerCase()) {

    case "faith":
      return {
        bestTime: "06:00 - 08:00, 19:00 - 21:00",
        timezone: "Local Time",
        reason:
          "Faith content performs better in the morning and evening.",
      };

    case "business":
      return {
        bestTime: "08:00 - 10:00",
        timezone: "Local Time",
        reason:
          "Business audiences are most active during workday mornings.",
      };

    case "education":
      return {
        bestTime: "16:00 - 20:00",
        timezone: "Local Time",
        reason:
          "Students and learners engage more after school or work.",
      };

    case "technology":
      return {
        bestTime: "18:00 - 21:00",
        timezone: "Local Time",
        reason:
          "Tech audiences are highly active in the evening.",
      };

    case "entertainment":
      return {
        bestTime: "19:00 - 23:00",
        timezone: "Local Time",
        reason:
          "Entertainment content peaks at night.",
      };

    case "sports":
      return {
        bestTime: "17:00 - 21:00",
        timezone: "Local Time",
        reason:
          "Sports fans are active after work and around live events.",
      };

    default:
      return {
        bestTime: "18:00 - 21:00",
        timezone: "Local Time",
        reason:
          "General audience engagement is highest in the evening.",
      };

  }

}