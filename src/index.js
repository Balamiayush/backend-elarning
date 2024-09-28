// require('dotenv').config({path:'./env'})
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db/index";
dotenv.config({ path: "./env" });
connectDB();

// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}./${DB_NAME} `);
//     app.on("error", (error) => {
//       console.error(error);
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`Server is running on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// })();
