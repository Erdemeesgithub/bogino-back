const { Schema, model, SchemaType } = require("mongoose");

const urlSchema = new Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  createdAt: { type: String, default: Date.now },
  createdBy: String
})
const Url = model("Url", urlSchema)

exports.Url = Url