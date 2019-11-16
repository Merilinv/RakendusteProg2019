const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const itemRouter = require("./item.router.js");
const Item = require("./item.model.js");
const mongoose = require("mongoose");
require('dotenv').config();
const DB = require("./database.js");


// ${DB_USERNAME}:${DB_PASSWORD} ... ${DB_NAME}
const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0-jis41.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`; 
console.log("DB", DB_URL);

app.use(itemRouter);

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.get("/items/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.use(express.static("dist"));



  function listen(){
    app.listen(PORT, () => {
        console.log("Server started", PORT);
        console.log(`http://localhost:${PORT}`);
    });
  }

  mongoose.connect(DB_URL)
    .then(() => {
        console.log("database connection success");
        migrate();
        //deleteAllItems();
        listen();
    })
    .catch(err => {
        console.log("errrror", err);
    });

function migrate(){
    Item.count({}, (err, countNr) => {
        if (err) throw err;
        if (countNr > 0){
            console.log("Already had items");
            return;
        }
        saveAllItems();
    });
}


function deleteAllItems(){
    Item.deleteMany({}, (err, doc) => {
        console.log('err', err, "doc", doc);
    });
}

function saveAllItems(){
    console.log("Migrate started");
    const items = DB.getItems();
    items.forEach(item => {
        const document = new Item(item);
        document.save( (err) => {
            if (err){
                console.log(err);
                throw new Error("Something happened while saving");
            }
            console.log("Successful save");
        });
    }); 
    console.log("items", items);
}