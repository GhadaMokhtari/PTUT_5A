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
        results: {
            coherence: {
                communication: {
                    reponse: Boolean,
                    spontanement: Boolean,
                    habituellement: Boolean,
                    totalement: Boolean,
                    correctement: Boolean,
                    modalite: String,
                },
                comportement: {
                    reponse: Boolean,
                    spontanement: Boolean,
                    habituellement: Boolean,
                    totalement: Boolean,
                    correctement: Boolean,
                    modalite: String,
                },
                modalité: String,
            },
            orientation: {
                orientationespace: {
                    reponse: Boolean,
                    spontanement: Boolean,
                    habituellement: Boolean,
                    totalement: Boolean,
                    correctement: Boolean,
                    modalite: String,
                },
                orientationtemps: {
                    reponse: Boolean,
                    spontanement: Boolean,
                    habituellement: Boolean,
                    totalement: Boolean,
                    correctement: Boolean,
                    modalite: String,
                },
                modalité: String,
            },
            toilette: {
                toilettehaut: {
                    reponse: Boolean,
                    spontanement: Boolean,
                    habituellement: Boolean,
                    totalement: Boolean,
                    correctement: Boolean,
                    modalite: String,
                },
                toilettebas: {
                    reponse: Boolean,
                    spontanement: Boolean,
                    habituellement: Boolean,
                    totalement: Boolean,
                    correctement: Boolean,
                    modalite: String,
                },
                modalité: String,
            },
            habillage: {
                habillagehaut: {
                    reponse: Boolean,
                    spontanement: Boolean,
                    habituellement: Boolean,
                    totalement: Boolean,
                    correctement: Boolean,
                    modalite: String,
                },
                habillagemoyen: {
                    reponse: Boolean,
                    spontanement: Boolean,
                    habituellement: Boolean,
                    totalement: Boolean,
                    correctement: Boolean,
                    modalite: String,
                },
                habillagebas: {
                    reponse: Boolean,
                    spontanement: Boolean,
                    habituellement: Boolean,
                    totalement: Boolean,
                    correctement: Boolean,
                    modalite: String,
                },
                modalité: String,
            },
            alimentation: {
                seservir: {
                    reponse: Boolean,
                    spontanement: Boolean,
                    habituellement: Boolean,
                    totalement: Boolean,
                    correctement: Boolean,
                    modalite: String,
                },
                manger: {
                    reponse: Boolean,
                    spontanement: Boolean,
                    habituellement: Boolean,
                    totalement: Boolean,
                    correctement: Boolean,
                    modalite: String,
                },
                modalité: String,
            },
            elimination: {
                eliminationurinaire: {
                    reponse: Boolean,
                    spontanement: Boolean,
                    habituellement: Boolean,
                    totalement: Boolean,
                    correctement: Boolean,
                    modalite: String,
                },
                eliminationfecale: {
                    reponse: Boolean,
                    spontanement: Boolean,
                    habituellement: Boolean,
                    totalement: Boolean,
                    correctement: Boolean,
                    modalite: String,
                },
                modalité: String,
            },
            transfert: {
                reponse: Boolean,
                spontanement: Boolean,
                habituellement: Boolean,
                totalement: Boolean,
                correctement: Boolean,
                modalite: String,
            },
            deplacementinterieur: {
                reponse: Boolean,
                spontanement: Boolean,
                habituellement: Boolean,
                totalement: Boolean,
                correctement: Boolean,
                modalite: String,
            },
            deplacementexterieur: {
                reponse: Boolean,
                spontanement: Boolean,
                habituellement: Boolean,
                totalement: Boolean,
                correctement: Boolean,
                modalite: String,
            },
            communicationdistance: {
                reponse: Boolean,
                spontanement: Boolean,
                habituellement: Boolean,
                totalement: Boolean,
                correctement: Boolean,
                modalite: String,
            },
            gestion: {
                reponse: Boolean,
                spontanement: Boolean,
                habituellement: Boolean,
                totalement: Boolean,
                correctement: Boolean,
                modalite: String,
            },
            cuisine: {
                reponse: Boolean,
                spontanement: Boolean,
                habituellement: Boolean,
                totalement: Boolean,
                correctement: Boolean,
                modalite: String,
            },
            menage: {
                reponse: Boolean,
                spontanement: Boolean,
                habituellement: Boolean,
                totalement: Boolean,
                correctement: Boolean,
                modalite: String,
            },
            transport: {
                reponse: Boolean,
                spontanement: Boolean,
                habituellement: Boolean,
                totalement: Boolean,
                correctement: Boolean,
                modalite: String,
            },
            achat: {
                reponse: Boolean,
                spontanement: Boolean,
                habituellement: Boolean,
                totalement: Boolean,
                correctement: Boolean,
                modalite: String,
            },
            suivitraitement: {
                reponse: Boolean,
                spontanement: Boolean,
                habituellement: Boolean,
                totalement: Boolean,
                correctement: Boolean,
                modalite: String,
            },
            activitetempslibre: {
                reponse: Boolean,
                spontanement: Boolean,
                habituellement: Boolean,
                totalement: Boolean,
                correctement: Boolean,
                modalite: String,
            },
        }
    }, {
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
