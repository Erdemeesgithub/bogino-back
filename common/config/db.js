// const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);

// // mongoose.connect(process.env.MONGO_URL);

// const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";

// const connect = async () => {
//   try {
//     await mongoose.connect(uri)
//     console.log(Successful);
//   } catch (error) {
//     throw new Error(error)
//   }
// };

// exports.connect = connect

const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://Dirty_ToiletPaper:94031299Ub@cluster0.rz2pxnm.mongodb.net/?retryWrites=true&w=majority";
const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(MONGODB_URL);
    console.log(`successfully connected to MongoDB heh`);
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.connect = connect;
