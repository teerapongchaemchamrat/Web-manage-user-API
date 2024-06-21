'use strict';
const utils = require('../../BCC/utils');
const config = require('../../../config');
const sql = require('mssql');

const getAll = async () => {
    try{
        sql.close();
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Computer');
        const getList = await pool.request().query(sqlQueries.getall);
        return getList.recordset;
    }catch (error) {
        return error.message;
    }
}

const getAllUndefined = async () => {
    try{
        sql.close();
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Computer');
        const getList = await pool.request().query(sqlQueries.getComUndefined);
        return getList.recordset;
    }catch (error) {
        return error.message;
    }
}

const getById = async(case_service) => {
    try{
        sql.close();
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Computer');
        const event = await pool.request()
                            .input('case_service', sql.NVarChar(50), case_service)
                            .query(sqlQueries.getById);
        return event.recordset;
    }catch (error) {
        return error.message;
    }
}

const insertComputer = async(data) => {
    try {
        sql.close();
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Computer');
        const insert = await pool.request()
                            .input('user_id', sql.NVarChar(30), data.user_id)
                            .input('case_brand', sql.NVarChar(50), data.case_brand)
                            .input('case_model', sql.NVarChar(50), data.case_model)
                            .input('case_service', sql.NVarChar(50), data.case_service)
                            .input('moniter_brand', sql.NVarChar(50), data.moniter_brand)
                            .input('moniter_service', sql.NVarChar(50), data.moniter_service)
                            .input('moniter_serial', sql.NVarChar(50), data.moniter_serial)
                            .input('key_brand', sql.NVarChar(50), data.key_brand)
                            .input('key_serial', sql.NVarChar(50), data.key_serial)
                            .input('mouse_brand', sql.NVarChar(50), data.mouse_brand)
                            .input('mouse_serial', sql.NVarChar(50), data.mouse_serial)
                            .input('os', sql.NVarChar(50), data.os)
                            .input('office_version', sql.NVarChar(50), data.office_version)
                            .input('office_key', sql.NVarChar(50), data.office_key)
                            .input('office_acc', sql.NVarChar(50), data.office_acc)
                            .input('office_pass', sql.NVarChar(50), data.office_pass)
                            .input('location', sql.NVarChar(50), data.location)
                            .input('create_by', sql.NVarChar(50), data.create_by)
                            .query(sqlQueries.insertCom);
        return insert.recordset;
    }catch (error) {
        return error.message;
    }
}

const updateComputer = async(case_service, data) => {
    try{
        sql.close();
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Computer');
        const update = await pool.request()
                            .input('case_service', sql.NVarChar(50), case_service)
                            .input('user_id', sql.NVarChar(30), data.user_id)
                            .input('moniter_brand', sql.NVarChar(50), data.moniter_brand)
                            .input('moniter_service', sql.NVarChar(50), data.moniter_service)
                            .input('moniter_serial', sql.NVarChar(50), data.moniter_serial)
                            .input('key_brand', sql.NVarChar(50), data.key_brand)
                            .input('key_serial', sql.NVarChar(50), data.key_serial)
                            .input('mouse_brand', sql.NVarChar(50), data.mouse_brand)
                            .input('mouse_serial', sql.NVarChar(50), data.mouse_serial)
                            .input('os', sql.NVarChar(50), data.os)
                            .input('office_version', sql.NVarChar(50), data.office_version)
                            .input('office_key', sql.NVarChar(50), data.office_key)
                            .input('office_acc', sql.NVarChar(50), data.office_acc)
                            .input('office_pass', sql.NVarChar(50), data.office_pass)
                            .input('location', sql.NVarChar(50), data.location)
                            .input('update_by', sql.NVarChar(50), data.update_by)
                            .query(sqlQueries.updateCom);
        return update.recordset;
    }catch (error) {
        return error.message
    }
}

const insertRepairLog = async(data) => {
    try {
        sql.close();
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Computer');
        const insert = await pool.request()
                            .input('case_service', sql.NVarChar(30), data.case_service)
                            .input('type', sql.NVarChar(50), data.type)
                            .input('problem', sql.NVarChar(50), data.problem)
                            .input('cause', sql.NVarChar(50), data.cause)
                            .input('solution', sql.NVarChar(50), data.solution)
                            .input('moniter_brand_old', sql.NVarChar(50), data.moniter_brand_old)
                            .input('moniter_serial_old', sql.NVarChar(50), data.moniter_serial_old)
                            .input('moniter_service_old', sql.NVarChar(50), data.moniter_service_old)
                            .input('key_brand_old', sql.NVarChar(50), data.key_brand_old)
                            .input('key_serial_old', sql.NVarChar(50), data.key_serial_old)
                            .input('mouse_brand_old', sql.NVarChar(50), data.mouse_brand_old)
                            .input('mouse_serial_old', sql.NVarChar(50), data.mouse_serial_old)
                            .input('moniter_brand_new', sql.NVarChar(50), data.moniter_brand_new)
                            .input('moniter_serial_new', sql.NVarChar(50), data.moniter_serial_new)
                            .input('moniter_service_new', sql.NVarChar(50), data.moniter_service_new)
                            .input('key_brand_new', sql.NVarChar(50), data.key_brand_new)
                            .input('key_serial_new', sql.NVarChar(50), data.key_serial_new)
                            .input('mouse_brand_new', sql.NVarChar(50), data.mouse_brand_new)
                            .input('mouse_serial_new', sql.NVarChar(50), data.mouse_serial_new)
                            .input('user_req', sql.NVarChar(50), data.user_req)
                            .input('date_req', sql.NVarChar(50), data.date_req)
                            .input('user_it', sql.NVarChar(50), data.user_it)
                            .input('date_complete', sql.NVarChar(50), data.date_complete)
                            .query(sqlQueries.comRepair);
        return insert.recordset;
    }catch (error) {
        return error.message;
    }
}

const getLogById = async(case_service) => {
    try{
        sql.close();
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Computer');
        const event = await pool.request()
                            .input('case_service', sql.NVarChar(50), case_service)
                            .query(sqlQueries.getrepairlog);
        return event.recordset;
    }catch (error) {
        return error.message;
    }
}

const updatemoniter = async(case_service, data) => {
    try{
        sql.close();
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Computer');
        const update = await pool.request()
                            .input('case_service', sql.NVarChar(50), case_service)
                            .input('moniter_brand', sql.NVarChar(50), data.moniter_brand)
                            .input('moniter_service', sql.NVarChar(50), data.moniter_service)
                            .input('moniter_serial', sql.NVarChar(50), data.moniter_serial)
                            .input('update_by', sql.NVarChar(50), data.update_by)
                            .query(sqlQueries.updateMoniter);
        return update.recordset;
    }catch (error) {
        return error.message
    }
}

const updatekeyboard = async(case_service, data) => {
    try{
        sql.close();
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Computer');
        const update = await pool.request()
                            .input('case_service', sql.NVarChar(50), case_service)
                            .input('key_brand', sql.NVarChar(50), data.key_brand)
                            .input('key_serial', sql.NVarChar(50), data.key_serial)
                            .input('update_by', sql.NVarChar(50), data.update_by)
                            .query(sqlQueries.updateKeyboard);
        return update.recordset;
    }catch (error) {
        return error.message
    }
}

const updatemouse = async(case_service, data) => {
    try{
        sql.close();
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Computer');
        const update = await pool.request()
                            .input('case_service', sql.NVarChar(50), case_service)
                            .input('mouse_brand', sql.NVarChar(50), data.mouse_brand)
                            .input('mouse_serial', sql.NVarChar(50), data.mouse_serial)
                            .input('update_by', sql.NVarChar(50), data.update_by)
                            .query(sqlQueries.updateMouse);
        return update.recordset;
    }catch (error) {
        return error.message
    }
}

module.exports = {
    getAll,
    getById,
    insertComputer,
    updateComputer,
    getAllUndefined,
    insertRepairLog,
    getLogById,
    updatemoniter,
    updatekeyboard,
    updatemouse
}