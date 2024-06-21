'use strict';

const userData = require('../data/BMC/User');

const GetAll = async (req, res, next) => {
    try{
        const getall = await userData.getAll();
        res.send(getall);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const GetAllActive = async (req, res, next) => {
    try{
        const getall = await userData.getAllActive();
        res.send(getall);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const GetAllDeactive = async (req, res, next) => {
    try{
        const getall = await userData.getAllDeactive();
        res.send(getall);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const GetUserAndCom = async (req, res, next) => {
    try{
        const getall = await userData.getUserAndCom();
        res.send(getall);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const GetById = async ( req, res, next) => {
    try{
        const user_id = req.params.user_id;
        const event = await userData.getById(user_id);
        res.send(event);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const addUser = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await userData.insertUser(data);
        res.send(insert);
    } catch (error) {
        //res.status(400).send(error.message);
        if (error.message === 'Duplicate user_id') {
            res.status(400).send('EmployeeID Ready');
        } else {
            res.status(400).send(error.message);
        }
    }
}

const updateUsers = async (req, res, next) => {
    try {
        const user_id =  req.params.user_id;
        const data = req.body;
        const updated = await userData.updateUser(user_id, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteUsers = async (req, res, next) => {
    try {
        const user_id =  req.params.user_id;
        const data = req.body;
        const updated = await userData.deleteUser(user_id, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const restoreUsers = async (req, res, next) => {
    try {
        const user_id =  req.params.user_id;
        const data = req.body;
        const updated = await userData.restoreUser(user_id, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports={
    GetAll,
    GetById,
    addUser,
    updateUsers,
    GetUserAndCom,
    deleteUsers,
    GetAllDeactive,
    GetAllActive,
    restoreUsers
}