const express = require('express');
const mongoose = require('mongoose');

const dotenv = require('dotenv').config();
const app = express();
const port =  process.env.PORT || 5000  ;
const colors = require('colors');
const cors = require('cors');
const dbconnect = require('./dbconnect');

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://admin:IGh5BH8DoVhKWLpo@cluster0.6dmhann.mongodb.net/?retryWrites=true&w=majority`
mongoose.set('strictQuery', true);
dbconnect();

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
 try{
    await client.connect();
    const productsCollection = client.db("demoProducts").collection('products');

    app.get('/items', async (req, res) => {
        const items = await productsCollection.find({}).toArray();
        res.send(items);
    });

 } finally{}
}
run().catch(console.dir);





app.get('/', (req, res) => {
    res.send('backend server is running');
});

app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
});