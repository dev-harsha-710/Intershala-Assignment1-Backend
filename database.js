const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// MongoDB connection URL
const mongoUrl =
  process.env.REACT_APP_MONGODB_URL ||
  `mongodb+srv://harshagawade143:Harsha123@cluster0.vymetov.mongodb.net`;
// const mongoURL = `${mongoUrl}`;
const mongoURL = `${mongoUrl}/heliverse`;

// MongoDB connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Other options if needed
};

// Connecting to MongoDB
const connectToMongoose = () => {
  mongoose
    .connect(mongoURL, options)
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
    });
};

module.exports = connectToMongoose;
