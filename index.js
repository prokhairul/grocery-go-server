const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;


// Middleware 
app.use(cors());
app.use(express.json());



// Mongodb Connection 

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.2m0za.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    console.log('Grocery Go Connected Successfully')
    // perform actions on the collection object
    client.close();
});



//Simple Testing Api 

app.get('/', (req, res) => {

    res.send('Server Running Smoothly');
})

app.listen(port, () => {
    console.log('Server Running on', port)
})
