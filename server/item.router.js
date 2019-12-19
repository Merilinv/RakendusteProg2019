const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Item = require("./item.model.js");


// Deletes an item
router.delete("/api/items/:itemId", (req, res) => {
    Item.deleteOne({"_id" : mongoose.Types.ObjectId(req.params.itemId)}, (err) => {
        if (err) return res.send(500);
        console.log("Item deleted");
        return res.send(204);
    });
});

//create a new item
router.post("/", (req, res) =>{
    const props = {
        imgSrc: "google.com",
        title: "painting",
        price: 240,
        category: "oils",
    };
    const item1 = new Item(props);
    item1.save(err =>{
        if(err){
            console.log("Error", err);
            res.send(500);
            return;
        }
        console.log("Success create!");
        res.send(201);
    });
});

// return an item
router.get("/:itemId", (req, res)=>{
    Item.findById(req.params.itemId, function (err, item) {
        if(err){
            console.log("Error while returning an item:", err);
            res.status(500).send(err);
            return;
        }
        res.send(item);
    });
    //res.send(DB.getItem(req.params.itemId));
});

//Returns all items
router.get("/", (req, res) =>{
    Item.find({}, function(err, items){
        if(err){
            console.log("Error while returning items:", err);
            res.status(500).send(err);
            return;
        }
        res.send(items);
    });
    //res.json(DB.getItems());
});



module.exports = router;