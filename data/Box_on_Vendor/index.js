'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getAllOnVendor = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Box_on_Vendor');
        const getList = await pool.request().query(sqlQueries.get);
        return getList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}
module.exports={

    getAllOnVendor

}