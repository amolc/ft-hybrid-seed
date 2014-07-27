var http = require('http');
var mysql = require('mysql');
var connection = mysql.createConnection({
	database : 'icefire',
	user : 'root',
	password : '',
});

connection.connect(function(err) {
	if (err != null) {
		console.log('Err' + err);
	}
});

exports.findAll = function(req, res) {
	connection.query("SELECT * from gnossem.jos_vm_vendor order by vendor_id", function(err, rows) {
		console.log('Array Length: ' + rows.length);
		if(rows.length>0){
			res.jsonp(rows);
		}else{
			res.jsonp("");
		}
	});
};

exports.findById = function(req, res) {
	console.log(req.params);
	var id = parseInt(req.params.id);
	console.log('findById: ' + id);
	connection.query("SELECT * from gnossem.jos_vm_vendor where vendor_id =" + id, function(err, rows) {
		if(rows.length>0){
			res.jsonp(rows);
		}else{
			res.jsonp("");
		}
		//query returns array of arrays we need to return the first one only.
	});
};
// exports.deleteById = function(req, res) {
	// console.log(req.params);
	// var id = parseInt(req.params.id);
	// connection.query("DDELETE FROM gnossem.jos_vm_vendor where vendor_id =" + id, function(err, rows) {
	// console.log('Delete Vendor No : ' + id);
	// });
// };
/*
exports.destroy = function ( req, res ){
  Todo.findById( req.params.id, function ( err, todo ){
    todo.remove( function ( err, todo ){
    	console.log('Delete Vendor No : ' + id);
      res.redirect( '/' );
    });
  });
};
*/




