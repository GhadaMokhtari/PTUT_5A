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
            q1Result : String,
            q1bisResult : String,
            q2Result : String,
            q2bisResult : String,
            q3Result : String,
            q3bisResult : String,
            q4Result : String,
            q4bisResult : String,
            q4terResult : String,
            q5Result : String,
            q5bisResult : String,
            q6Result : String,
            q7Result : String,
            q8Result : String,
            q9Result : String,
            q10Result : String,
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
