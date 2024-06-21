'use strict';

const express = require('express');
const cors = require('cors');
const router = express.Router();
//const path = require('path');
const eventControll_BTC_User = require('../controllers/eventController_BTC_user');
const eventControll_BTC_Computer = require('../controllers/eventController_BTC_computer');

router.use(cors());

router.get('/user/get', eventControll_BTC_User.GetAll);
router.get('/user/active', eventControll_BTC_User.GetAllActive);
router.get('/user/deactive', eventControll_BTC_User.GetAllDeactive);
router.get('/user/get/:user_id', eventControll_BTC_User.GetById);
router.get('/user/result', eventControll_BTC_User.GetUserAndCom);
router.post('/user/add', eventControll_BTC_User.addUser);
router.put('/user/update/:user_id', eventControll_BTC_User.updateUsers);
router.put('/user/remove/:user_id', eventControll_BTC_User.deleteUsers);
router.put('/user/restore/:user_id', eventControll_BTC_User.restoreUsers);

router.get('/com/get', eventControll_BTC_Computer.GetAll);
router.get('/com/undefined', eventControll_BTC_Computer.GetAllUndefined);
router.get('/com/get/:case_service', eventControll_BTC_Computer.GetById);
router.get('/com/log/:case_service', eventControll_BTC_Computer.GetRepairById);
router.post('/com/add', eventControll_BTC_Computer.addComputer);
router.post('/com/repair/log', eventControll_BTC_Computer.addRepairLog);
router.put('/com/update/:case_service', eventControll_BTC_Computer.updateComputer);
router.put('/com/update/moniter/:case_service', eventControll_BTC_Computer.updateMoniter);
router.put('/com/update/keyboard/:case_service', eventControll_BTC_Computer.updateKeyboard);
router.put('/com/update/mouse/:case_service', eventControll_BTC_Computer.updateMouse);


// router.get('/reports/user_form', (req, res) => {
    
//     const reportName = 'user_form.rpt';
//     const reportPath = 'D:/Folder Share/react update/user+computer/API/';

//     // Combine the report name and path
//     const fullReportPath = `${reportPath}${reportName}`;

//     //const reportProcess = spawn('crystal-reports-command', ['generate', fullReportPath]);
//     const reportProcess = spawn('crystal-reports-command', ['generate', fullReportPath]);

//     // Handle errors
//     reportProcess.on('error', (error) => {
//         console.error('Error generating report:', error);
//         res.status(500).send('Error generating report');
//     });

//     // Stream the generated report back to the client
//     reportProcess.stdout.pipe(res);
// });

module.exports = {
    routes: router
}