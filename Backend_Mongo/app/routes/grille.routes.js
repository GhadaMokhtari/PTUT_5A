module.exports = app => {
    const grille = require("../controllers/grille.controller.js");

    var router2 = require("express").Router();

    // Create a new Patient
    router2.post("/", grille.create);

    // Retrieve all Patients
    router2.get("/", grille.findAll);

    // Retrieve all published Patients
    router2.get("/published", grille.findAllPublished);

    // Retrieve a single Patient with id
    router2.get("/:id", grille.findOne);

    // Update a Patient with id
    router2.put("/:id", grille.update);

    // Delete a Patient with id
    router2.delete("/:id", grille.delete);

    // Create a new Patient
    router2.delete("/", grille.deleteAll);

    app.use('/api/grille', router2);
};
