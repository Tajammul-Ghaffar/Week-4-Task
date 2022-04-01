const express = require("express");
const mongoose = require ("mongoose");
const user = require("./model/user");
require("dotenv").config();

const app =express();
app.use(express.json());

const port =3001;
const uri = process.env.MONGODB_CONNECTION_STRING;

mongoose.connect(uri,{
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true,
    });

const connection = mongoose.connection;
connection.once("open",() => {
console.log("Connection Successfull");
}); 

app.get("/user", async (req, res) =>{
    await user.find({}, (err, result) => {
    console.log("user from db: ", result);
    res.send(result);
    }).clone()
    });
    
    app.post("/user", async (req, res) => {
    try {
    console.log("req.body:",req.body);
    
    const newuser=new user({
    userFirstName: req.body.userFirstName,
    userPassword: req.body.userPassword,
    });
    
    await user.create(newuser);
    res.send("user added")
    } catch(err){
    console.log("error:",err);
    }
    });

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
    });