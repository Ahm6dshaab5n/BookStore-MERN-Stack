import express from "express";
import {PORT,mongoDBURL} from './config.js';
const app = express();
import mongoose from 'mongoose';
import {Book} from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';


app.use(cors());

// middleware for parsing request body

app.use(express.json());

app.get("/",(req,res)=>{
  console.log(req);
  return res.status(234).send("welcome to mern stack tutorial");
});

app.use('/books',booksRoute);

mongoose.connect(mongoDBURL)
  .then(() => {
    console.log("database connected successfully");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`app is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:");
    console.error(error);
  });
