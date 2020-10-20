const sql = require("./db.js");

// constructor
const Patient = function(patient) {
    this.nom = patient.nom;
    this.prenom = patient.prenom;
    this.date_naissance = patient.date_naissance;
};

Patient.create = (newPatient, result) => {
    sql.query("INSERT INTO patient SET ?", newPatient, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created patient: ", { id: res.insertId, ...newPatient });
        result(null, { id: res.insertId, ...newPatient });
    });
};

Patient.findById = (patientId, result) => {
    sql.query(`SELECT * FROM patient WHERE id = ${patientId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found patient: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Patient with the id
        result({ kind: "not_found" }, null);
    });
};

Patient.getAll = result => {
    sql.query("SELECT * FROM patient", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("patient: ", res);
        result(null, res);
    });
};

Patient.updateById = (id, patient, result) => {
    sql.query(
        "UPDATE patient SET prenom = ?, nom = ?, date_naissance = ? WHERE id = ?",
        [patient.prenom, patient.nom, patient.date_naissance, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found Patient with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated patient: ", { id: id, ...patient });
            result(null, { id: id, ...patient });
        }
    );
};

Patient.remove = (id, result) => {
    sql.query("DELETE FROM patient WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Patient with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted patient with id: ", id);
        result(null, res);
    });
};

Patient.removeAll = result => {
    sql.query("DELETE FROM patient", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} patients`);
        result(null, res);
    });
};

module.exports = Patient;
