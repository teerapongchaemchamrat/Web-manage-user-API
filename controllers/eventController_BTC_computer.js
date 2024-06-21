'use strict';

const computerData = require('../data/BTC/Computer');

const GetAll = async (req, res, next) => {
    try{
        const getall = await computerData.getAll();
        res.send(getall);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const GetAllUndefined = async (req, res, next) => {
    try{
        const getall = await computerData.getAllUndefined();
        res.send(getall);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const GetById = async ( req, res, next) => {
    try{
        const case_service = req.params.case_service;
        const event = await computerData.getById(case_service);
        res.send(event);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const addComputer = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await computerData.insertComputer(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateComputer = async (req, res, next) => {
    try {
        const case_service =  req.params.case_service;
        const data = req.body;
        const updated = await computerData.updateComputer(case_service, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addRepairLog = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await computerData.insertRepairLog(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const GetRepairById = async ( req, res, next) => {
    try{
        const case_service = req.params.case_service;
        const event = await computerData.getLogById(case_service);
        res.send(event);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const updateMoniter = async (req, res, next) => {
    try {
        const case_service =  req.params.case_service;
        const data = req.body;
        const updated = await computerData.updatemoniter(case_service, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateKeyboard = async (req, res, next) => {
    try {
        const case_service =  req.params.case_service;
        const data = req.body;
        const updated = await computerData.updatekeyboard(case_service, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateMouse = async (req, res, next) => {
    try {
        const case_service =  req.params.case_service;
        const data = req.body;
        const updated = await computerData.updatemouse(case_service, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    GetAll,
    GetById,
    addComputer,
    updateComputer,
    GetAllUndefined,
    addRepairLog,
    GetRepairById,
    updateMoniter,
    updateKeyboard,
    updateMouse
}