const mongoose = require('mongoose');

const connectDB = async() => {
  try {
    const conn = await mongoose.connect(process.env.URL);
    console.log("connected to mongo");
  } catch (error) {
    console.log(error);
  }
  
}

module.exports = connectDB;