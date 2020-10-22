const db = require("../models");
const Grille = db.grille;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Grille
    const grille = new Grille({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    });

    // Save Grille in the database
    grille
        .save(grille)
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

// Retrieve all Grilles from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    Grille.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving patients."
            });
        });
};

// Find a single Grille with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Grille.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Patient with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Patient with id=" + id });
        });
};

// Update a Grille by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Grille.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Patient with id=${id}. Maybe Patient was not found!`
                });
            } else res.send({ message: "Patient was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Patient with id=" + id
            });
        });
};

// Delete a Grille with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Grille.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Patient with id=${id}. Maybe Patient was not found!`
                });
            } else {
                res.send({
                    message: "Patient was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Patient with id=" + id
            });
        });
};

// Delete all Grilles from the database.
exports.deleteAll = (req, res) => {
    Grille.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Patients were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all patients."
            });
        });
};

// Find all published Grilles
exports.findAllPublished = (req, res) => {
    Grille.find({ published: true })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving patients."
            });
        });
};
