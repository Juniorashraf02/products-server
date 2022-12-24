const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port =  process.env.PORT || 5000 ;
const colors = require('colors');
const dotenv = require('dotenv').config();
const cors = require('cors');
const dbconnect = require('./dbconnect');


mongoose.set('strictQuery', true);
dbconnect();


app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    console.log('backend server is running');
});

app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
});