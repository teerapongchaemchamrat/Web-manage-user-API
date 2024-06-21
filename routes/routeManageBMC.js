'use strict';

const express = require('express');
const cors = require('cors');
const router = express.Router();
//const path = require('path');
const eventControll_BMC_User = require('../controllers/eventController_BMC_user');
const eventControll_BMC_Computer = require('../controllers/eventController_BMC_computer');

router.use(cors());

router.get('/user/get', eventControll_BMC_User.GetAll);
router.get('/user/active', eventControll_BMC_User.GetAllActive);
router.get('/user/deactive', eventControll_BMC_User.GetAllDeactive);
router.get('/user/get/:user_id', eventControll_BMC_User.GetById);
router.get('/user/result', eventControll_BMC_User.GetUserAndCom);
router.post('/user/add', eventControll_BMC_User.addUser);
router.put('/user/update/:user_id', eventControll_BMC_User.updateUsers);
router.put('/user/remove/:user_id', eventControll_BMC_User.deleteUsers);
router.put('/user/restore/:user_id', eventControll_BMC_User.restoreUsers);

router.get('/com/get', eventControll_BMC_Computer.GetAll);
router.get('/com/undefined', eventControll_BMC_Computer.GetAllUndefined);
router.get('/com/get/:case_service', eventControll_BMC_Computer.GetById);
router.get('/com/log/:case_service', eventControll_BMC_Computer.GetRepairById);
router.post('/com/add', eventControll_BMC_Computer.addComputer);
router.post('/com/repair/log', eventControll_BMC_Computer.addRepairLog);
router.put('/com/update/:case_service', eventControll_BMC_Computer.updateComputer);
router.put('/com/update/moniter/:case_service', eventControll_BMC_Computer.updateMoniter);
router.put('/com/update/keyboard/:case_service', eventControll_BMC_Computer.updateKeyboard);
router.put('/com/update/mouse/:case_service', eventControll_BMC_Computer.updateMouse);

module.exports = {
    routes: router
}