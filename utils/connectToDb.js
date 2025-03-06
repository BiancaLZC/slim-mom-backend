const mongoose = require("mongoose");
const colors = require("colors");

async function connectToDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URI),
      console.log(colors.bgGreen.italic.bold("Database connection successful!"));
  } catch (error) {
    console.error(colors.red.italic.bold(error));
    process.exit(1);
  }
}

module.exports = connectToDb;