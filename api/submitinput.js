var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'icefire',
	password : 'ferrari4321',
    host :'localhost',
 });

 var CRUD = require('mysql-crud');
 var submitCRUD=CRUD(db, 'tbl_submited_input');
 exports.submitInput = function(req, res) {
 	 submitCRUD.create({'name':'shahzad','email':'shahzad@fortsolution.com','phone':'03347268737','description':'it is a description','image':'image path','type_of_input':'gerenal'}, function (err, vals) {
  	 if(vals.affectedRows>0){
  	 		var resdata={
 	  		status:true,
 	  		message :' Thanks for submitting your input.'
 	  	};
 	  	 res.jsonp(resdata);
  	 }
       });
      
 }; 
 