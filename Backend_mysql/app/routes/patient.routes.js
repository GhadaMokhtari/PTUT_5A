module.exports = app => {
    const patients = require("../controllers/patient.controller.js");

    // Create a new patient
    app.post("/patient", patients.create);

    // Retrieve all patients
    app.get("/patient", patients.findAll);

    // Retrieve a single Customer with customerId
    app.get("/patient/:patientId", patients.findOne);

    // Update a Customer with customerId
    app.put("/patient/:patientId", patients.update);

    // Delete a Customer with customerId
    app.delete("/patient/:patientId", patients.delete);

    // Create a new Customer
    app.delete("/patient", patients.deleteAll);
};
