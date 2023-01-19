const {Router} = require("express")
const {signup} = require("../controllers/authController")


exports.authRouter = Router().post("/users", signup)