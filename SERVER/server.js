const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./app/config/db.config.js");
const mongoose = require("mongoose");
const db = {};

const app = express();

var corsOptions = {
    origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;
db.mongoose = mongoose;
db.url = dbConfig.url;

db.patients = require("./app/models/patient.model.js")(mongoose);
db.evaluation = require("./app/models/evaluation.model.js")(mongoose);

module.exports = db;

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Veressar's application." });
});

require("./app/routes/patient.routes")(app);
require("./app/routes/evaluation.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
