
var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'icefire',
	password : 'ferrari4321',
    host :'localhost',
 });

 var CRUD = require('mysql-crud');
 var municipalityCRUD=CRUD(db, 'tbl_municipality');
 exports.findMunicipality = function(req, res) {

 	var id = parseInt(req.params.id);
 	console.log(id);
 	  municipalityCRUD.load({state_id : id}, function (err, val) {	  
 	  	res.jsonp(val);
 	  });
 	    
 }; 
 
 /******************for select all municipality *****************/

  exports.MunicipalityList = function(req, res) {
 	  municipalityCRUD.load({}, function (err, val) {	  
 	  	res.jsonp(val);
 	  });   
 }; 

  exports.allMunicipality = function(req, res) {
 		 var query = "SELECT tbl_municipality.m_id , tbl_municipality.m_name , tbl_municipality.state_id , tbl_state.state_name FROM tbl_municipality INNER JOIN tbl_state ON tbl_municipality.state_id = tbl_state.state_id";
db.query(query, function(err, rows){
    res.jsonp(rows);
   });
 }; 


/******************for create new municipality it inster value in to data base*****************/ 
 
 exports.createNewMunicipality = function(req, res) {
 	console.log(req.body);
 	 var munName=req.body.mun_name;
 	 var stateID=req.body.stateID;
 	 	 
 	console.log('name '+munName);
 	console.log('id'+stateID);
  municipalityCRUD.create({'m_name' :munName,'state_id' : stateID}, function (err, vals) {
  	if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'Municipality successfully added'};
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

exports.deleteMunicipality = function(req, res) {
   var municipality_id=parseInt(req.params.id);
   municipalityCRUD.destroy({'m_id' : municipality_id}, function (err, vals) {
   console.log(vals.affectedRows);
  	if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'municipality successfully deleted'};
	  	res.jsonp(resdata);
	  	}else{
	  		 var resdata={status:false,
  		      message:'record not found '};
	  	      res.jsonp(resdata);
	  	     }
       });
    };
   
 /******************  End Delete *****************/

/******************for  update data in data base********/

exports.updateMunicipality = function(req, res) {
	mid=req.body.m_id;
 	munname=req.body.m_name;
 	stateid=req.body.stateID;
 municipalityCRUD.update({'m_id' : mid}, {m_name:munname,state_id:stateid}, function (err, vals) {
  if(parseInt(vals.affectedRows)>0){
  		var resdata={status:true,
  		      message:'municipality successfully updated'};
	  	res.jsonp(resdata);
	  	}else{
	  		 var resdata={status:false,
  		      message:'record not updated '};
	  	      res.jsonp(resdata);
	  	     }
      });
   };
  
/******************  End Update *****************/














