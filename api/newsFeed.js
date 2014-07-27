var http = require('http');
var mysql = require('mysql');
var db = mysql.createPool({
	database : 'icefire',
     user : 'icefire',
	password : 'ferrari4321',
    host :'localhost',
 });

 var CRUD = require('mysql-crud');
 var newsFeedCRUD=CRUD(db, 'tbl_newscat');
 exports.newsFeed = function(req, res) {
 	  newsFeedCRUD.load({}, function (err, val) {	  
 	  	res.jsonp(val);
 	  },{'limit' : 5 ,'offset' :0});    
 }; 
var newsDetailCRUD=CRUD(db, 'tbl_category_description');
 exports.newsDetail = function(req, res) {
 	var id = parseInt(req.params.id);
 	  newsDetailCRUD.load({type_id:id}, function (err, val) {	  
 	  	res.jsonp(val);
 	  });    
 }; 
 
 
 
  exports.Addnews = function(req, res) {
 	  newsDetailCRUD.create({'type_id' :1,'title':'internet','description':'no internet to day'}, function (err, val) {	  
 	  	console.log(err);
 	  	if(err==null){
 	  		var resdata={
 	  			status:true,
 	  			massage:'added successfuly'
 	  		   };
 	  		res.jsonp(resdata);
 	  	}
 	  });    
 };
 
 
 

  exports.deletenewsfeed = function(req, res) {
  	  var id=parseInt(req.params.id);
 	  newsDetailCRUD.destroy({'id' :id}, function (err, val) {	  
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
 
exports.updatenewsfeed = function(req, res) {
  	  var id=parseInt(req.params.id);
 	  newsDetailCRUD.update({'id' :id},{'description':'no internet today night'}, function (err, val) {	  
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