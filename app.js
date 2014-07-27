var express = require('express'), path = require('path');
var app = express();

//employees = require('./api/employee');
product = require('./api/product');
vendor = require('./api/vendor');
state = require('./api/state');
getdetail = require('./api/getdetail');
municipality=require('./api/municipality');
housingAssociation=require('./api/housingAssociation');
login=require('./api/login');
adminlogin=require('./api/adminLogin');
newsFeed=require('./api/newsFeed');
contact=require('./api/contactdetail');
submitInput=require('./api/submitinput');
// start housing admin
housingadminlogin=require('./api/H_adminlogin.js');
services=require('./api/services.js');
//end housing admin
app.use(express.bodyParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', express.static(__dirname + '/admin'));
app.use('/mobile', express.static(__dirname + '/mobile/www'));
app.use('/housingadmin', express.static(__dirname + '/housingadmin'));


app.get('/api/state', state.findAllstate);
app.post('/api/addState', state.createNewState);
app.get('/api/deleteState/:id', state.deleteState);
app.post('/api/updateState', state.updateState);
app.get('/api/getdetail/:id', getdetail.statedetail);
app.get('/api/getmundetail/:id', getdetail.municipalitydetail);
app.get('/api/municipality/:id', municipality.findMunicipality);
app.get('/api/allmunicipality', municipality.allMunicipality);
app.post('/api/addMunicipality', municipality.createNewMunicipality);
app.get('/api/deleteMunicipality/:id', municipality.deleteMunicipality);
app.post('/api/updateMunicipality', municipality.updateMunicipality);
app.get('/api/housingAssociation/:id', housingAssociation.findHousinnAss);

app.get('/api/abc', housingAssociation.abc);
app.get('/api/allHousingAss', housingAssociation.allHousingAss);
app.get('/api/addHousingAss', housingAssociation.createNewHousingAss);
app.get('/api/deleteHousingAss/:id', housingAssociation.deleteHousingAss);
app.get('/api/updateHousingAss/:id', housingAssociation.updateHousingAss);
app.post('/api/login', login.login);
app.get('/api/newsFeed', newsFeed.newsFeed);
app.get('/api/newsdetail/:id', newsFeed.newsDetail);
app.get('/api/addNews', newsFeed.Addnews);
app.get('/api/deleteNews/:id', newsFeed.deletenewsfeed);
app.get('/api/updateNews/:id', newsFeed.updatenewsfeed);
app.get('/api/contact', contact.contact);
app.get('/api/contactdetail/:id', contact.contactdetail);
app.get('/api/addContact', contact.AddContact);
app.get('/api/deleteContact/:id', contact.deleteContact);
app.get('/api/UpdateContact/:id', contact.updateContact);
app.get('/api/submitInput', submitInput.submitInput);
app.post('/api/adminLogin', adminlogin.login);

// apu link for housing admin panel
app.post('/api/HousingAdminLogin', housingadminlogin.login);
app.post('/api/services', services.findAllervices);

app.listen(5000);
console.log('Listening on port 5000...'); 
