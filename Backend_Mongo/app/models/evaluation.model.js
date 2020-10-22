module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            eval_num: String,
            score: String,
            rang: String,
            gir: String
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Evaluation = mongoose.model("evaluation", schema);
    return Evaluation;
};
