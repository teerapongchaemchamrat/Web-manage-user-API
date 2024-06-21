'use strict';
const express = require('express');
const config  = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const CYF_User = require('./routes/routeManageCYF');
const BMC_User = require('./routes/routeManageBMC');
const TKG_User = require('./routes/routeManageTKG');
const BCC_User = require('./routes/routeManageBCC');
const BTC_User = require('./routes/routeManageBTC');

const app = express();

app.use(express.json());
app.use(cors());
//app.use(bodyParser.json());
app.use(bodyParser.json({limit:1024*1024*20, type:'application/json'}));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*'); //หรือใส่แค่เฉพาะ domain ที่ต้องการได้
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


app.use('/cyf', CYF_User.routes);
app.use('/bmc', BMC_User.routes);
app.use('/tkg', TKG_User.routes);
app.use('/bcc', BCC_User.routes);
app.use('/btc', BTC_User.routes);


app.get('/',function(req,res){
  res.sendFile(path.resolve(__dirname,'D:/Folder Share/react update/App Delivery BTC/API/homepage_api.html'));
});

app.listen(config.port,()=>
console.log('app listening on url http://localhost:' + config.port 
));

 