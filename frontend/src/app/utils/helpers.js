import { ratingColors, ratingValues } from "./enums";

export const returnRatingColor = (ratingValue) => {
  switch (ratingValue) {
    case ratingValues.VERY_HIGH:
      return ratingColors.VERY_HIGH;
    case ratingValues.HIGH:
      return ratingColors.HIGH;
    case ratingValues.MEDIUM:
      return ratingColors.MEDIUM;
    case ratingValues.LOW:
      return ratingColors.LOW;
    default:
      return "#e0e0e0";
  }
};
