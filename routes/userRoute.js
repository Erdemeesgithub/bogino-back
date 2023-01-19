const {Router} = require("express")
const { getUsers, createUser } = require("../controllers/userController")
const { authMiddleware } = require("../middleware/authMiddleware")

exports.userRouter = Router().get("/users", authMiddleware, getUsers).post("/users", createUser)


