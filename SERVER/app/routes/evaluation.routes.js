module.exports = app => {
    const evaluation = require("../controllers/evaluation.controller.js");

    var router = require("express").Router();

    // Create a new Evaluation
    router.post("/", evaluation.create);

    // Retrieve all Evaluations
    router.get("/", evaluation.findAll);

    // Retrieve a single Evaluation with id
    router.get("/:id", evaluation.findOne);

    // Update a Evaluation with id
    router.put("/:id", evaluation.update);

    // Delete a Evaluation with id
    router.delete("/:id", evaluation.delete);

    // Create a new Evaluation
    router.delete("/", evaluation.deleteAll);

    app.use('/api/evaluation', router);
};
