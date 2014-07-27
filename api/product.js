var http = require('http');
var mysql = require('mysql');
var connection = mysql.createConnection({
	database : 'icefire',
	user : 'icefire',
	password : 'ferrari4321',
});

connection.connect(function(err) {
	if (err != null) {
		console.log('Err' + err);
	}
});

exports.findAll = function(req, res) {
	connection.query("SELECT * from gnossem.jos_vm_product limit 10", function(err, rows) {
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
	console.log('findByPId: ' + id);
	connection.query("SELECT * from gnossem.jos_vm_product where product_id =" + id, function(err, rows) {
		if(rows.length>0){
			res.jsonp(rows);
		}else{
			res.jsonp("");
		}
		//query returns array of arrays we need to return the first one only.
	});
};




