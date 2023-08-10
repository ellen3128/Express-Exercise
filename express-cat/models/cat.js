const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const catSchema = new Schema(
{
    name: { type: String, required: true },
    breed: { type: String, enum: ["Domestic Shorthair", "Maine Coon", "Sphynx", "Bengal", "Ragdoll"] },
    color: { type: String, required: true },
    age: { type: Number, required: true, min: 0}
    
}, {
    timestamps: true
});

module.exports = mongoose.model("Cat", catSchema);