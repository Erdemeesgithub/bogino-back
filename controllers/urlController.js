const { Url } = require("../models/urlModel");
const { randomInt } = require("crypto");

exports.createUrl = async (req, res) => {
  const { longUrl, userId } = req.body;
  const urlCode = randomInt(100000, 999999);
  const baseUrl = "http://localhost:1111";
  try {
    let shortUrl = baseUrl + "/url/" + urlCode;

    url = new Url({
      urlCode: urlCode,
      longUrl: longUrl,
      shortUrl,
      createdBy: userId,
      createdAt: new Date(),
    });

    await url.save();
    return res.status(200).json({ data: url });
  } catch (err) {
    console.log(err);
  }
  return res.end();
};

exports.getUrls = async (req, res) => {
  // const page = req.query.page - 1
  // const userId = req.query.userId
  // if (userId) {
  const result = await Url.find();
  // .limit(5).skip(page * 5)
  return res.send(result);
  // }
  res.sendStatus(404);
};
exports.getUrl = async (req, res) => {
  const { userId } = req.query;
  try {
    if (userId) {
      const result = await Url.find({ createdBy: userId });
      console.log(result);

      return res.send(result)
    }
  } catch (error) {
    res.status(404).send(error)
  }
};
