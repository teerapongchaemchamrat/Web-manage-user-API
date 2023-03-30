'use strict';

const BoxDataOut = require('../data/BoxEventsOut');

const getAllProductOut = async (req, res, next) => {
    try {
        const getlist = await BoxDataOut.getProductOut();
        res.send(getlist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getProductbyIdOut = async (req, res, next) => {
    try {
        const BoxId = req.params.id;
        const event = await BoxDataOut.getByIdOut(BoxId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addProductOut = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await BoxDataOut.creatProductOut(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateProductOut = async (req, res, next) => {
    try {
        const BoxId =  req.params.id;
        const data = req.body;
        const updated = await BoxDataOut.updateProductbyIdOut(BoxId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllProductOut,
    addProductOut,
    getProductbyIdOut,
    updateProductOut
}