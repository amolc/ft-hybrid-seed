var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'icefire',
	password : 'ferrari4321',
    host :'localhost',
 });

 var CRUD = require('mysql-crud');
 var stateCrud=CRUD(db, 'tbl_state');
 
 exports.statedetail = function(req, res) {
 	var id=parseInt(req.params.id);
 	  stateCrud.load({state_id:id}, function (err, val) {	
 	  	res.jsonp(val[0]);
 	  });  
 }; 
 
// exports.municipalitydetail = function(req, res) {
	 // var munCrud=CRUD(db, 'tbl_municipality');
 	// var id=parseInt(req.params.id);
 	  // munCrud.load({m_id:id}, function (err, val) {	
 	  	// res.jsonp(val[0]);
 	  // });  
 // };
 exports.municipalitydetail = function(req, res) {
	var id=parseInt(req.params.id);
	 		 var query = "SELECT tbl_municipality.m_id , tbl_municipality.m_name ,  tbl_state.state_name FROM tbl_municipality INNER JOIN tbl_state ON tbl_municipality.state_id = tbl_state.state_id where  tbl_municipality.m_id="+id;
              db.query(query, function(err, rows){
              res.jsonp(rows[0]);
   });
 };  
  exports.housingAssdetail = function(req, res) {
	var id=parseInt(req.params.id);
	 		 var query = "SELECT `tbl_housing_association`.housing_ass_id ,`tbl_housing_association`.`housing_ass_name`,`tbl_housing_association`.`address`,`tbl_housing_association`.`building_password`,tbl_municipality.m_name from `tbl_housing_association` inner join tbl_municipality on `tbl_housing_association`.m_id=tbl_municipality.m_id  where  tbl_housing_association.housing_ass_id="+id;
              db.query(query, function(err, rows){
              res.jsonp(rows[0]);
   });
 };  