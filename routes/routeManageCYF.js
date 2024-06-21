'use strict';

const express = require('express');
const cors = require('cors');
const router = express.Router();
//const path = require('path');
const eventControll_CYF_User = require('../controllers/eventController_CYF_user');
const eventControll_CYF_Computer = require('../controllers/eventController_CYF_computer');

router.use(cors());

router.get('/user/get', eventControll_CYF_User.GetAll);
router.get('/user/active', eventControll_CYF_User.GetAllActive);
router.get('/user/deactive', eventControll_CYF_User.GetAllDeactive);
router.get('/user/get/:user_id', eventControll_CYF_User.GetById);
router.get('/user/result', eventControll_CYF_User.GetUserAndCom);
router.post('/user/add', eventControll_CYF_User.addUser);
router.put('/user/update/:user_id', eventControll_CYF_User.updateUsers);
router.put('/user/remove/:user_id', eventControll_CYF_User.deleteUsers);
router.put('/user/restore/:user_id', eventControll_CYF_User.restoreUsers);

router.get('/com/get', eventControll_CYF_Computer.GetAll);
router.get('/com/undefined', eventControll_CYF_Computer.GetAllUndefined);
router.get('/com/get/:case_service', eventControll_CYF_Computer.GetById);
router.get('/com/log/:case_service', eventControll_CYF_Computer.GetRepairById);
router.post('/com/add', eventControll_CYF_Computer.addComputer);
router.post('/com/repair/log', eventControll_CYF_Computer.addRepairLog);
router.put('/com/update/:case_service', eventControll_CYF_Computer.updateComputer);
router.put('/com/update/moniter/:case_service', eventControll_CYF_Computer.updateMoniter);
router.put('/com/update/keyboard/:case_service', eventControll_CYF_Computer.updateKeyboard);
router.put('/com/update/mouse/:case_service', eventControll_CYF_Computer.updateMouse);

router.get('/com/doc/:doc_num', eventControll_CYF_Computer.GetDocById);
router.put('/com/remove/:case_service', eventControll_CYF_Computer.updateComBroken);
router.get('/com/broken', eventControll_CYF_Computer.GetComBroken);

module.exports = {
    routes: router
}