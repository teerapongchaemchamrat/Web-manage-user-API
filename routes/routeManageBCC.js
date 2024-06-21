'use strict';

const express = require('express');
const cors = require('cors');
const router = express.Router();
//const path = require('path');
const eventControll_BCC_User = require('../controllers/eventController_BCC_user');
const eventControll_BCC_Computer = require('../controllers/eventController_BCC_computer');

router.use(cors());

router.get('/user/get', eventControll_BCC_User.GetAll);
router.get('/user/active', eventControll_BCC_User.GetAllActive);
router.get('/user/deactive', eventControll_BCC_User.GetAllDeactive);
router.get('/user/get/:user_id', eventControll_BCC_User.GetById);
router.get('/user/result', eventControll_BCC_User.GetUserAndCom);
router.post('/user/add', eventControll_BCC_User.addUser);
router.put('/user/update/:user_id', eventControll_BCC_User.updateUsers);
router.put('/user/remove/:user_id', eventControll_BCC_User.deleteUsers);
router.put('/user/restore/:user_id', eventControll_BCC_User.restoreUsers);

router.get('/com/get', eventControll_BCC_Computer.GetAll);
router.get('/com/undefined', eventControll_BCC_Computer.GetAllUndefined);
router.get('/com/get/:case_service', eventControll_BCC_Computer.GetById);
router.get('/com/log/:case_service', eventControll_BCC_Computer.GetRepairById);
router.post('/com/add', eventControll_BCC_Computer.addComputer);
router.post('/com/repair/log', eventControll_BCC_Computer.addRepairLog);
router.put('/com/update/:case_service', eventControll_BCC_Computer.updateComputer);
router.put('/com/update/moniter/:case_service', eventControll_BCC_Computer.updateMoniter);
router.put('/com/update/keyboard/:case_service', eventControll_BCC_Computer.updateKeyboard);
router.put('/com/update/mouse/:case_service', eventControll_BCC_Computer.updateMouse);

module.exports = {
    routes: router
}