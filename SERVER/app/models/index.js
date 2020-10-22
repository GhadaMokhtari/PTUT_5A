const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.patients = require("./patient.model.js")(mongoose);
db.grille = require("./grille.model.js")(mongoose);
db.evaluation = require("./evaluation.model.js")(mongoose);
module.exports = db;
