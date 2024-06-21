'use strict';
const utils = require('../../BTC/utils');
const config = require('../../../config');
const sql = require('mssql');

const getAll = async () => {
    try{
        sql.close();
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('User');
        const getList = await pool.request().query(sqlQueries.getall);
        return getList.recordset;
    }catch (error) {
        return error.message;
    }
}

const getAllActive = async () => {
    try{
        sql.close();
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('User');
        const getList = await pool.request().query(sqlQueries.getuserActive);
        return getList.recordset;
    }catch (error) {
        return error.message;
    }
}

const getAllDeactive = async () => {
    try{
        sql.close();
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('User');
        const getList = await pool.request().query(sqlQueries.userDeactive);
        return getList.recordset;
    }catch (error) {
        return error.message;
    }
}

const getUserAndCom = async () => {
    try{
        sql.close();
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('User');
        const getList = await pool.request().query(sqlQueries.UserAndCom);
        return getList.recordset;
    }catch (error) {
        return error.message;
    }
}

const getById = async(user_id) => {
    try{
        sql.close();
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('User');
        const event = await pool.request()
                            .input('user_id', sql.NVarChar(50), user_id)
                            .query(sqlQueries.getById);
        return event.recordset;
    }catch (error) {
        return error.message;
    }
}

const insertUser = async(data) => {
    try{
        sql.close();
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('User');
        const insert = await pool.request()
                            .input('user_id', sql.NVarChar(20), data.user_id)
                            .input('first_name', sql.NVarChar(100), data.first_name)
                            .input('last_name', sql.NVarChar(100), data.last_name)
                            .input('dpt', sql.NVarChar(50), data.dpt)
                            .input('infor_id', sql.NVarChar(30), data.infor_id)
                            .input('infor_pass', sql.NVarChar(30), data.infor_pass)
                            .input('dcc_id', sql.NVarChar(30), data.dcc_id)
                            .input('dcc_pass', sql.NVarChar(30), data.dcc_pass)
                            .input('com_id', sql.NVarChar(30), data.com_id)
                            .input('com_pass', sql.NVarChar(30), data.com_pass)
                            .input('email_id', sql.NVarChar(100), data.email_id)
                            .input('email_pass', sql.NVarChar(30), data.email_pass)
                            .input('print_id', sql.NVarChar(30), data.print_id)
                            .input('print_pass', sql.NVarChar(30), data.print_pass)
                            .input('instead', sql.NVarChar(200), data.instead)
                            .input('create_by', sql.NVarChar(50), data.create_by)
                            .query(sqlQueries.insertUser);
        return insert.recordset;
    }catch (error) {
        //return error.message;
        if (error.number === 2627) { // SQL Server error code for unique constraint violation
            throw new Error('Duplicate user_id');
        } else {
            throw new Error(error.message);
        }
    }
}

const updateUser = async(user_id, data) => {
    try{
        sql.close();
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('User');
        const update = await pool.request()
                            .input('user_id', sql.NVarChar(20), user_id)
                            .input('new_id', sql.NVarChar(10), data.new_id)
                            .input('dpt', sql.NVarChar(10), data.dpt)
                            .input('infor_id', sql.NVarChar(30), data.infor_id)
                            .input('infor_pass', sql.NVarChar(30), data.infor_pass)
                            .input('dcc_id', sql.NVarChar(30), data.dcc_id)
                            .input('dcc_pass', sql.NVarChar(30), data.dcc_pass)
                            .input('com_id', sql.NVarChar(30), data.com_id)
                            .input('com_pass', sql.NVarChar(30), data.com_pass)
                            .input('email_id', sql.NVarChar(100), data.email_id)
                            .input('email_pass', sql.NVarChar(30), data.email_pass)
                            .input('print_id', sql.NVarChar(30), data.print_id)
                            .input('print_pass', sql.NVarChar(30), data.print_pass)
                            .input('status', sql.NVarChar(2), data.status)
                            .input('update_by', sql.NVarChar(30), data.update_by)
                            .query(sqlQueries.updateUser);
        //console.log(update.sql);
        return update.recordset;
    }catch (error) {
        return error.message;
        //console.log("error:", error.message);
    }
}

const deleteUser = async(user_id, data) => {
    try{
        sql.close();
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('User');
        const update = await pool.request()
                            .input('user_id', sql.NVarChar(20), user_id)
                            .input('update_by', sql.NVarChar(30), data.update_by)
                            .query(sqlQueries.deleteUser);
        return update.recordset;
    }catch (error) {
        return error.message;
    }
}

const restoreUser = async(user_id, data) => {
    try{
        sql.close();
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('User');
        const update = await pool.request()
                            .input('user_id', sql.NVarChar(20), user_id)
                            .input('update_by', sql.NVarChar(30), data.update_by)
                            .query(sqlQueries.restoreUser);
        return update.recordset;
    }catch (error) {
        return error.message;
    }
}

module.exports = {
    getAll,
    getById,
    insertUser,
    updateUser,
    getUserAndCom,
    deleteUser,
    getAllDeactive,
    getAllActive,
    restoreUser
}