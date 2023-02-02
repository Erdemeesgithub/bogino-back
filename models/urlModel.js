const { Schema, model } = require("mongoose");

const urlSchema = new Schema({
  longUrl: String,
  shortUrl: String,
  createdAt: { default: Date.now(), type: Date },
});

const Url = model("Url", urlSchema);

exports.Url = Url
