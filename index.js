const express = require('express');
const { connect } = require('./utils/db');


const piratesRouter = require('./routes/pirate.routes');

connect();

const PORT = 3000;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));


server.use('/pirates', piratesRouter);

server.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || 'Unexpected error');
});

server.listen(PORT, () => {
    console.log('Todo OK');
})