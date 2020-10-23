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