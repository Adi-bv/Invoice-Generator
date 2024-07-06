const mongoose = require('mongoose');

const connectDB = async() => {
  try {
    console.log(process.env.Mongo_MyDataBase_URL);
    const conn = await mongoose.connect(process.env.Mongo_MyDataBase_URL);
    
    console.log("connected to mongo");
  } catch (error) {
    console.log(error);
  }
  
}

module.exports = connectDB;