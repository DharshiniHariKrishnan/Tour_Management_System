require('dotenv').config();
const express = require("express");
const searchRouter = require("./routes/searchRoute.js");
const cors = require('cors')

const mongoose = require('mongoose')

const app = express();
const port = process.env.PORT || 8000;
const allowedOrigins = ['http://localhost:3000']; 


app.use(cors({
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  }));

// connecting to database
const uri = process.env.MONGODB_URI; 



mongoose.connect(uri)
.then(() => console.log('MongoDB connection established'))
.catch(err => console.error('MongoDB connection error:', err));



//middleware
app.use(express.json());
app.use(cors());
app.use("/search", searchRouter);