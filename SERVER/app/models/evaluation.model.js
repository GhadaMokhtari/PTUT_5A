module.exports = mongoose => {
    var schema = mongoose.Schema({
        date: Date,
        score: String,
        rang: String,
        gir: String,
        patient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'patient'
        },
            results : {
            coherence: {
                coherenceModality: '',
                coherenceValeurs: ''
            },
            orientationV: {
                orientationModality: '',
                orientationValeurs: '',
            },
            toilette: {
                toiletteModality: '',
                toiletteValeurs: ''
            },
            habillage: {
                habillageModality: '',
                habillageValeurs: '',
            },
            alimentation: {
                alimentationModality: '',
                alimentationValeurs: ''
            },
            elimination: {
                eliminationModality: '',
                eliminationValeurs: '',
            },
            tranferts: {
                transfertsModality: '',
                transfertsValeurs: '',
            },
            deplacementsInterieurs: {
                deplacementsInterieursModality: '',
                depInterValeurs: ''
            },
            deplacementsExterieurs: {
                deplacementsExterieursModality: '',
                depExtValeurs: '',
            },
            communicationDistance: {
                communicationDistanceModality: '',
                commDistValeurs: ''
            },
            gestion: {
                gestionModality: '',
                gestionValeurs: ''
            },
            menage: {
                menageModality: '',
                menageValeurs: ''
            },
            cuisine: {
                cuisineModality: '',
                cuisineValeurs: ''
            },
            transportsV: {
                transportsModality: '',
                transportsValeurs: ''
            },
            achats: {
                achatsModality: '',
                achatsValeurs: '',
            },
            suiviTraitement: {
                suiviMedModality: '',
                suiviMedValeurs: ''
            },
            activitesLibres: {
                activitesLibresModality: '',
                actLibValeurs: ''
            }
        }} ,
    {
        timestamps: true
    });

    schema.method("toJSON", function () {
        const {
            __v,
            _id,
            ...object
        } = this.toObject();
        object.id = _id;
        return object;
    });

    const Evaluation = mongoose.model("evaluation", schema);
    return Evaluation;
};
