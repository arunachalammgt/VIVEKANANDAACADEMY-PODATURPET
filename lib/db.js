import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!global.mongoose) {
  global.mongoose = mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

export default global.mongoose;
