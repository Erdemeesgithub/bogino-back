const { Url } = require("../models/urlModel");
const { randomInt } = require('crypto');



exports.createUrl = async (req, res) => {
  const longUrl = req.body.longUrl
  const urlCode = randomInt(100000, 999999);
  const baseUrl = "http://localhost:1111"
  try {
    let url = await Url.findOne({ longUrl })
    let shortUrl = baseUrl + "/url/" + urlCode

    url = new Url({
      urlCode:urlCode,
      longUrl:longUrl,
      shortUrl, 
      userId: req.query.uid,
      createdAt: new Date(),
    })

    await url.save()
    return res.status(200).json({ data: url, })
  }
  catch (err) {
    console.log(err)
  }
  return res.end()
}

exports.getUrls = async (req, res) => {
  // const page = req.query.page - 1
  // const userId = req.query.userId
  // if (userId) {
    const result = await Url.find()
    // .limit(5).skip(page * 5)
    return res.send(result)
  // }
  res.sendStatus(404)
}
exports.getUrl = async (req, res) => {
  const uid = req.params.id;
  if (uid) {
    console.log(uid)
    const result = await Url.find({urlCode:uid});
    console.log(result[0].longUrl)
    return res.writeHead(301,{
      Location:result[0].longUrl
    }).end()
  }
  res.sendStatus(404);
}

