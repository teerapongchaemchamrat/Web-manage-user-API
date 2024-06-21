'use strict';

const express = require('express');
const cors = require('cors');
const router = express.Router();
//const path = require('path');
const eventControll_TKG_User = require('../controllers/eventController_TKG_user');
const eventControll_TKG_Computer = require('../controllers/eventController_TKG_computer');


router.use(cors());

router.get('/user/get', eventControll_TKG_User.GetAll);
router.get('/user/active', eventControll_TKG_User.GetAllActive);
router.get('/user/deactive', eventControll_TKG_User.GetAllDeactive);
router.get('/user/get/:user_id', eventControll_TKG_User.GetById);
router.get('/user/result', eventControll_TKG_User.GetUserAndCom);
router.post('/user/add', eventControll_TKG_User.addUser);
router.put('/user/update/:user_id', eventControll_TKG_User.updateUsers);
router.put('/user/remove/:user_id', eventControll_TKG_User.deleteUsers);
router.put('/user/restore/:user_id', eventControll_TKG_User.restoreUsers);

router.get('/com/get', eventControll_TKG_Computer.GetAll);
router.get('/com/undefined', eventControll_TKG_Computer.GetAllUndefined);
router.get('/com/get/:case_service', eventControll_TKG_Computer.GetById);
router.get('/com/log/:case_service', eventControll_TKG_Computer.GetRepairById);
router.post('/com/add', eventControll_TKG_Computer.addComputer);
router.post('/com/repair/log', eventControll_TKG_Computer.addRepairLog);
router.put('/com/update/:case_service', eventControll_TKG_Computer.updateComputer);
router.put('/com/update/moniter/:case_service', eventControll_TKG_Computer.updateMoniter);
router.put('/com/update/keyboard/:case_service', eventControll_TKG_Computer.updateKeyboard);
router.put('/com/update/mouse/:case_service', eventControll_TKG_Computer.updateMouse);

module.exports = {
    routes: router
}