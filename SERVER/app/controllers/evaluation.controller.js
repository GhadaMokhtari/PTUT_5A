const db = require("../models");
const Evaluation = db.evaluation;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.eval_num || !req.body.score || !req.body.rang || !req.body.gir) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Evaluation
    const evaluation = new Evaluation({
        eval_num: req.body.eval_num,
        score: req.body.score,
        rang: req.body.rang,
        gir: req.body.gir,
        published: req.body.published ? req.body.published : false
    });

    // Save Evaluation in the database
    evaluation
        .save(evaluation)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

// Retrieve all Evaluation from the database.
exports.findAll = (req, res) => {
    const nom = req.query.nom;
    var condition = nom ? { nom: { $regex: new RegExp(nom), $options: "i" } } : {};

    Evaluation.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving evaluations."
            });
        });
};

// Find a single Evaluation with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Evaluation.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Evaluation with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Evaluation with id=" + id });
        });
};

// Update a Evaluation by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Evaluation.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Evaluation with id=${id}. Maybe Evaluation was not found!`
                });
            } else res.send({ message: "Evaluation was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Evaluation with id=" + id
            });
        });
};

// Delete a Evaluation with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Evaluation.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Evaluation with id=${id}. Maybe Evaluation was not found!`
                });
            } else {
                res.send({
                    message: "Evaluation was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Evaluation with id=" + id
            });
        });
};

// Delete all Evaluations from the database.
exports.deleteAll = (req, res) => {
    Evaluation.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Evaluations were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Evaluations."
            });
        });
};
