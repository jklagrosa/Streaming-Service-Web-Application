import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  desc: {
    type: String,
  },
  lang: {
    type: String,
  },
  sub: {
    type: String,
  },
  genre: {
    type: String,
  },
  runtime: {
    type: String,
  },
  release: {
    type: String,
  },
  trailer: {
    type: String,
  },
  video: {
    type: String,
  },
  like: {
    type: Boolean,
  },
  fave: {
    type: Boolean,
  },
  img: {
    type: String,
  },
});

// mongoose.models = {};

export default mongoose.models.movie || mongoose.model("movie", movieSchema);
