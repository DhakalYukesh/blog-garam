import mongoose from "mongoose";
require('dotenv').config();

export const connectToDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URL)
      .then(() => console.log("Success! Connected with the database."))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};
