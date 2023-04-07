'use strict';

const BoxOnVendor = require('../data/Box_on_Vendor');

const getAllBoxOnVendor = async (req, res, next) => {
    try {
        const getlist = await BoxOnVendor.getAllOnVendor();
        res.send(getlist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}
    module.exports= {
        getAllBoxOnVendor
    }