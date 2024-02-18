require('dotenv').config();
const mongoose = require('mongoose')




// connecting to database
const uri = process.env.MONGODB_URI; 

mongoose.connect(uri)
.then(() => console.log('MongoDB connection established'))
.catch(err => console.error('MongoDB connection error:', err));