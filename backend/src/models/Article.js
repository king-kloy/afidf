import mongoose from "mongoose";
const Schema = mongoose.Schema;

// create Article schema
const articleSchema = Schema({
  category: {
    type: String,
    enum: [
      "POLITICS",
      "BUSINESS",
      "SPORTS",
      "ENTERTAINMENT",
      "LIFESTYLE",
      "WORLD",
      "OPINION",
      "REGIONALS",
      "LIVESCORES",
      "EDUCATION",
    ],
  },
  imageSrc: String,
  title: String,
  userId: String,
  details: String,
  status: {
    type: String,
    enum: ["PENDING", "APPROVED", "DISAPPROVED"],
    default: "PENDING",
  },
  metaTags: { type: Array, default: [] },
  metaDescription: String,
  createdDate: { type: Date, default: Date.now },
});

/**
 * @exports Article {category, imageSrc, title, userId, createdDate, details, status, metaTags, metaDescription}
 */
export const Article = mongoose.model("Article", articleSchema);
