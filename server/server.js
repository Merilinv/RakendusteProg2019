const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const DB = require("./database.js");
const mongoose = require("mongoose");
require("dotenv").config();

//dokumendi kuju
var kittySchema = new mongoose.Schema({
    name: String
});
//dokumendi mudel
var Kitten = mongoose.model("Kitten", kittySchema);
//uus objekt
const kitten1 = new Kitten({
    name: "blue cat"
});


// ${DB_USERNAME}:${DB_PASSWORD} ... ${DB_NAME}
const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0-jis41.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`; //?authSource=admin

mongoose.connect(DB_URL)
    .then(() => {
        console.log("database access success");
        kitten1.save( err => {
            if(err){
                console.error("kitten had an error");
            }
            else{
                console.log("Save successful");
            }
        });
    })
    .catch(err => {
        console.log("errrror", err);
    });


//get all items
app.get("/api/items", (req, res) =>{
    res.json(DB.getItems());
});

//get item with id
app.get("/api/items/:itemId", (req, res)=>{
    res.send(DB.getItem(req.params.itemId));
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.get("/items/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.use(express.static("dist"));

app.listen(PORT, () => {
    console.log("Server started", PORT);
    console.log(`http://localhost:${PORT}`);
  });