module.exports = app => {
    const patients = require("../controllers/patient.controller.js");

    // Create a new patient
    app.post("/patients", patients.create);

    // Retrieve all patients
    app.get("/patients", patients.findAll);

    // Retrieve a single Customer with customerId
    app.get("/patients/:patientId", patients.findOne);

    // Update a Customer with customerId
    app.put("/patients/:patientId", patients.update);

    // Delete a Customer with customerId
    app.delete("/patients/:patientId", patients.delete);

    // Create a new Customer
    app.delete("/patients", patients.deleteAll);
};
