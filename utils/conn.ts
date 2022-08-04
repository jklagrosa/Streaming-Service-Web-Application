import mongoose from "mongoose";

const Dbconnection = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("DB already connected");
    return;
  }

  return await mongoose
    .connect(process.env.mongo_uri as string)

    .then((result) => {
      if (result) return;
    })
    .catch((err) => console.log("DB Error: " + err));
};
export default Dbconnection;
