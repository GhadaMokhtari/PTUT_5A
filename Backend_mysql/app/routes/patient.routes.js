module.exports = app => {
    const patients = require("../controllers/patient.controller.js");

    // Create a new patient
    app.post("/patient", patients.create);

    // Retrieve all patients
    app.get("/patient", patients.findAll);

    // Retrieve a single Patient with patientId
    app.get("/patient/:patientId", patients.findOne);

    // Update a patient with patientid
    app.put("/patient/:patientId", patients.update);

    // Delete a patient with patientid
    app.delete("/patient/:patientId", patients.delete);

    // Create a new patient
    app.delete("/patient", patients.deleteAll);
};
