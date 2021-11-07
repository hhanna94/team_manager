const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must provide a name that is at least 2 characters."],
        minlength: [2, "Name must be at least 2 characters."]
    },
    position: {type: String},
    status: {
        type: String,
        default: 'undecided'
    }
}, 
    {timestamps: true}
);

module.exports.Player = mongoose.model("Player", PlayerSchema)