const mongoose = require("mongoose");
const Item = require("./item.model.js");
const databaseMock = require("./database.mock.js");
/** Development environment. In Heroku we don't use .env file */

if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
  }

// ${DB_USERNAME}:${DB_PASSWORD} ... ${DB_NAME}
const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0-jis41.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`; 
//console.log("DB", DB_URL);

const connect = () => {
    return mongoose.connect(DB_URL)
    .then(() => {
        console.log("database connection success");
        migrate();
        //deleteAllItems();
        return true;
    })
    .catch(err => {
        console.log("database access error:", err);
    });
};

    

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

// function deleteAllItems(){
//     Item.deleteMany({}, (err, doc) => {
//         console.log('err', err, "doc", doc);
//     });
// }

function saveAllItems(){
    console.log("Migrate started");
    const items = databaseMock.getItems();
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

module.exports = {
    connect
};