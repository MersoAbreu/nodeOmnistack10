const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();


mongoose.connect('mongodb://omnistack:emerson@cluster0-shard-00-00.kopdr.mongodb.net:27017,cluster0-shard-00-01.kopdr.mongodb.net:27017,cluster0-shard-00-02.kopdr.mongodb.net:27017/week10?ssl=true&replicaSet=atlas-ospims-shard-0&authSource=admin&retryWrites=true&w=majority',{
useNewUrlParser:true,
useUnifiedTopology:true,
useFindAndModify:false,
useCreateIndex:true,
useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);





app.listen(3000, ()=>{
    console.log('Servidor on');
});