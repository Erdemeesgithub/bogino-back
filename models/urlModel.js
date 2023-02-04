const { Schema, model, SchemaType } = require("mongoose");

const urlSchema = new Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  user: String,
  createdAt: { type: String, default: Date.now }
})
const Url = model("Url", urlSchema)

exports.Url = Url