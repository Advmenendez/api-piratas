const mongoose = require('mongoose');

const urlDb = 'mongodb://localhost:27017/pirate';

const connect = async () => {
    try {
        await mongoose.connect(urlDb, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Todo OK!')
    } catch (error) {
        console.error('Todo mal', error);
    }
}

module.exports = { connect };