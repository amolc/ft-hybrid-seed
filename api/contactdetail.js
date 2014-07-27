var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'icefire',
	password : 'ferrari4321',
    host :'localhost',
 });

 var CRUD = require('mysql-crud');
 var contactCRUD=CRUD(db, 'tbl_contact_detail');
 exports.contact = function(req, res) {
 	  contactCRUD.load({}, function (err, val) {	  
 	  	res.jsonp(val);
 	  },{'limit' : 5 ,'offset' :0});    
 }; 
 
 
 
 var contactCRUD=CRUD(db, 'tbl_contact_detail');
 exports.contactdetail = function(req, res) {
 	var id = parseInt(req.params.id);
 	  contactCRUD.load({contact_id:id}, function (err, val) {	  
 	  	res.jsonp(val);
 	  });    
 }; 
 
 
 //  add contact 
 
  exports.AddContact = function(req, res) {
 	  contactCRUD.create({'contact_name' :'manger','phone_no':'03347268737','email':'shahzad@fortsolution','web_link':'shahzad@fortsolution','other_info':'all about other'}, function (err, val) {	  
 	  	console.log(err);
 	  	if(err==null){
 	  		var resdata={
 	  			status:true,
 	  			massage:' contact added successfuly'
 	  		   };
 	  		res.jsonp(resdata);
 	  	}
 	  });    
 }; 
      //delete contact
  exports.deleteContact = function(req, res) {
  	  var contact_id=parseInt(req.params.id);
 	  contactCRUD.destroy({'contact_id' :contact_id}, function (err, val) {	  
 	  		if(parseInt(val.affectedRows)>0){
 	  		var resdata={
 	  			status:true,
 	  			massage:'deleted  successfuly'
 	  		   };
 	  		  }else{
 	  		  	var resdata={
 	  			status:false,
 	  			massage:'not found'
 	  		   };
 	  		  	
 	  		  }
 	  		res.jsonp(resdata);
 	  	
 	  });    
 }; 
 
 //update contact
 
 
  exports.updateContact = function(req, res) {
  	  var contact_id=parseInt(req.params.id);
 	  contactCRUD.update({'contact_id' :contact_id},{'contact_name' :'boss','phone_no':'03347268737','email':'shahzad@gmail','web_link':'shahzad@fortsolution','other_info':'all about other'}, function (err, val) {	  
 	  if(parseInt(val.affectedRows)>0){
 	  		var resdata={
 	  			status:true,
 	  			massage:'updated  successfuly'
 	  		   };
 	  		  }else{
 	  		  	var resdata={
 	  			status:false,
 	  			massage:'not updated'
 	  		   };
 	  		  	
 	  		  }
 	  		res.jsonp(resdata);
 	  });    
 }; 
 