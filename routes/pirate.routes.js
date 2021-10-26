const express = require('express');
const router = express.Router();
const Pirate = require('../models/Pirate');

router.get('/', async (req, res, next) => {
    try {
        const pirates = await Pirate.find();
        return res.status(200).json(pirates);
    } catch (error) {
        return next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const newPirate = new Pirate({
            name: req.body.name,
            origin: req.body.origin,
            crew: req.body.crew,
            fruit: req.body.fruit
        });
        const createdPirate = await newPirate.save();
        return res.status(201).json(createdPirate.name);
    } catch (error) {
        return next(error);
    }
});

router.delete(':id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const pirateDeleted = await Pirate.findByIdAndDelete(id);
        return res.status(200).json(pirateDeleted.name)
    } catch (error) {
        return next(error);
    }
});

router.put(':id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const pirateModified = new Pirate(req.body);
        pirateModified._id = id;
        const pirateUpdated = await Pirate.findByIdAndUpdate(id, pirateModified);
        return res.status(200).json(pirateUpdated.title);
    } catch (error) {
        return next(error);
    }
});
router.get('/:name', async (req, res, next) => {
    const { name } = req.params;

    try {
        const pirateByName = await Pirate.find({ name });
        return res.status(200).json(pirateByName);
    } catch (err) {
        return next(error);
    }
});

router.get('/:origin', async (req, res, next) => {
    const { origin } = req.params;

    try {
        const pirateByOrigin = await Pirate.find({ origin });
        return res.status(200).json(pirateByOrigin);
    } catch (err) {
        return next(error);
    }
});

router.get('/:crew', async (req, res, next) => {
    const { crew } = req.params;

    try {
        const pirateByCrew = await Pirate.find({ crew });
        return res.status(200).json(pirateByCrew);
    } catch (err) {
        return next(error);
    }
});
router.get('/:fruit', async (req, res, next) => {
    const { fruit } = req.params;

    try {
        const pirateByFruit = await Pirate.find({ fruit });
        return res.status(200).json(pirateByFruit);
    } catch (err) {
        return next(error);
    }
});

module.exports = router;