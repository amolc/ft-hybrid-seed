
var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'icefire',
	password : 'ferrari4321',
    host :'localhost',
 });

 var CRUD = require('mysql-crud');
 var housingAssociationCRUD=CRUD(db, 'tbl_housing_association');
 exports.findHousinnAss = function(req, res) {
 	var id = parseInt(req.params.id);
 	console.log('id =='+id);
 	  housingAssociationCRUD.load({'m_id':id}, function (err, val) {	 
 	  	console.log(err); 
 	  	res.jsonp(val);
 	  });	    
 }; 
 
 
 exports.allHousingAss = function(req, res) {
 		 var query = "SELECT `tbl_housing_association`.housing_ass_id ,`tbl_housing_association`.`housing_ass_name`,`tbl_housing_association`.`address`,`tbl_housing_association`.`building_password`,tbl_municipality.m_name from `tbl_housing_association` inner join tbl_municipality on `tbl_housing_association`.m_id=tbl_municipality.m_id";
db.query(query, function(err, rows){
    res.jsonp(rows);
   });
 }; 
 

/******************for create new municipality it inster value in to data base*****************/ 
 
 exports.createNewHousingAss = function(req, res) {
 	var hname=req.body.h_name;
 	var mid=req.body.m_ID;
 	var address=req.body.address;
 	var pass=req.body.bPass;
  housingAssociationCRUD.create({'housing_ass_name' :hname,'m_id' :mid ,'address' :address,'building_password' :pass}, function (err, vals) {
  	console.log(err);
  if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'housing association successfully added'};
	  	res.jsonp(resdata);
	  	}else{
	  		 var resdata={status:false,
  		      message:'record not added '};
	  	      res.jsonp(resdata);
	  	     }
     });
    };
     
 /******************  End create *****************/



/******************for  delete data from  data base*****************/

exports.deleteHousingAss = function(req, res) {
	var housing_ass_id=parseInt(req.params.id);
housingAssociationCRUD.destroy({'housing_ass_id' : housing_ass_id}, function (err, vals) {
  	if(parseInt(vals.affectedRows)>0){
  		      var resdata={status:true,
  		      message:'housing association successfully deleted'};
	  	res.jsonp(resdata);
	  	}else{
	  		 var resdata={status:false,
  		      message:'record not found against it'};
	  	      res.jsonp(resdata);
	  	     }
	  	     console.log(resdata);
     });
    };
   
 /******************  End Delete *****************/

/******************for  update data in data base********/

exports.updateHousingAss = function(req, res) {
	var id=parseInt(req.params.id);
 housingAssociationCRUD.update({'housing_ass_id' : id}, {building_password:'shahzad1234'}, function (err, vals) {
if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'housing association successfully updated'};
	  	res.jsonp(resdata);
	  	}else{
	  		 var resdata={status:false,
  		      message:'record not updated '};
	  	      res.jsonp(resdata);
	  	     }
      });
   };
  
/******************  End Update *****************/

exports.abc = function(req, res) {
	 var query = "SELECT * FROM tbl_housing_association order by `housing_ass_name` ";
db.query(query, function(err, rows){
	console.log(rows);
	if(rows.length>0)
	{
		var resdata={
			status:true,
			message:'success',
			norows:rows
			
		};
		res.jsonp(resdata);
	}
   });
 };