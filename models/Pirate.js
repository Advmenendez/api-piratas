const mongoose = require('mongoose');

const pirateSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        origin: { type: String, required: true },
        crew: { type: String, required: true },
        fruit: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const Pirate = mongoose.model('Pirate', pirateSchema);
module.exports = Pirate;