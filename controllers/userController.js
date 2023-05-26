const { User } = require("../models/userModel");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({}, 
      { password: 0 }
      );
    res.send(users);
  } catch (error) {
    res.send(error);
  }
};

exports.createUser = async (req, res) => {
  const { username, password, email } = req.body || {};

  if (!username || !password || !email)
    return res.send("username, password and email is required");
  try {
    const userDocument = new User({ username, password, email });
    const user = await user.save();
    res.send(user);
  } catch (error) {
    res.send(error);
  }
};

// exports.toggleTask = async (req, res) => {
//   try {
//     const result = await Task.findById(req.params.id);
//     result.isDone = !result.isDone;
//     await result.save();
//     res.send(result);
//   } catch (err) {
//     res.send("err");
//   }
// };
