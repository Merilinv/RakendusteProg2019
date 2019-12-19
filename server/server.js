const express = require("express");
const app = express();
//const path = require("path");
const PORT = process.env.PORT || 3000;
const apiRouter = require("./apiRouter.js");
const DB = require("./database.js");
const bodyParser = require("body-parser");


app.use(bodyParser.json());

app.use(apiRouter);

/** For images and bundle.js */
app.use("/static", express.static("dist/static"));

/** For index.html */
app.use("/*", express.static("dist"));

app.use(express.static("dist"));

DB.connect()
    .then(() => {
        listen();
    })
    .catch(err => {
        console.log("Error on database connection: ", err);
    });

  function listen(){
    app.listen(PORT, () => {
        console.log("Server started", PORT);
        console.log(`http://localhost:${PORT}`);
    });
  }






