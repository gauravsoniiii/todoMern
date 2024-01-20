import mongoose from "mongoose";

const Connection = () => {
  const MONGODB_URI = `mongodb+srv://gauravsoni:gauravsoni@todo.scj2bpw.mongodb.net/?retryWrites=true&w=majority`;
  mongoose.connect(MONGODB_URI);
  mongoose.connection.on("connected", () => {
    console.log("Database connected Succesfully");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
  });
  mongoose.connection.on("error", () => {
    console.log("Error while connecting with the Databse", error.message);
  });
};

export default Connection;
