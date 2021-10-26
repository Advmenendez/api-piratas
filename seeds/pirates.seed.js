const mongoose = require('mongoose');

const Pirate = require('../models/Pirate');

const pirates = [
    {
        name: 'Luffy',
        origin: 'East Blue',
        crew: 'Sombrero de Paja',
        fruit: 'Gomu Gomu',
    },
    {
        name: 'Tony Tony Chopper',
        origin: 'West Blue',
        crew: 'Sombrero de Paja',
        fruit: 'Hito Hito',
    },
    {
        name: 'nami',
        origin: 'West blue',
        crew: 'Sombrero de paja',
        fruit: 'Ninguna',
    },
    {
        name: 'Bon Clay',
        origin: 'North Blue',
        crew: 'Baroque Works',
        fruit: 'Mane Mane',
    },
    {
        name: 'Portgass d. Ace',
        origin: 'East Blue',
        crew: 'Barbablanca',
        fruit: 'Mera Mera',
    },
],
const pirateDocuments = pirates.map(pirate => new Pirate(pirate));
mongoose
    .connect('mongodb://localhost:27017/pirate', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => {
        const allPirates = await Pirate.find();
        if (allPirates.length) {
            await Pirate.collection.drop();
        }
    })
    .catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async () => {
        await Pirate.insertMany(pirateDocuments);
        console.log('DatabaseCreated')
    })
    .catch((err) => console.log(`Error creating data: ${err}`))
    .finally(() => mongoose.disconnect());