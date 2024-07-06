const mongoose = require('mongoose');

const connectDB = async() => {
  try {
    const conn = await mongoose.connect("mongodb+srv://adi_mongo:Mongo123@mycluster.6fnc5t6.mongodb.net/?retryWrites=true&w=majority&appName=mycluster");
    
    console.log("connected to mongo");
  } catch (error) {
    console.log(error);
  }
  
}

module.exports = connectDB;
