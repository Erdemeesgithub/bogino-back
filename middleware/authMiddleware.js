const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
  const token = req.headers.authorization ?? null;
  //   const { username, password } = req.body;

  if (!token) return res.send(" auth token is required");

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // if (!payload) return res.send("Unauth");
  } catch (error) {
    throw res.send(error);
  }

  next();

};
