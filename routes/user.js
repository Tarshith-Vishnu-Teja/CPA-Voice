
/*
 * GET users listing.
 */
var accounts = require('./accounts');
 var bankbalance = require('./accounts');
 var request = require("request");



exports.routeAPI = function(req, res){
	var api = req.body.result.action;
	console.log("heya!");
	switch(api){
	case "bankbalance" : 
		var result = accounts.bankbalance(req, res, function(err, result){
			console.log("result here is " + JSON.stringify(result));
			res.send(result);

		}); 
		break;
		
	case "peopleoweme" :
		var result = accounts.owemoney(req, res, function(err, result){
			console.log("result here is " + JSON.stringify(result));
			res.send(result);
		});
		break;
		
	case "smscustomer" :
		var result = accounts.smscustomer(req, res, function(err, result){
			console.log("result here is " + JSON.stringify(result));
			res.send(result);
		}); 
	break;
	
	case "callcustomer" :
		var result = accounts.callcustomer(req, res, function(err, result){
			console.log("result here is " + JSON.stringify(result));
			res.send(result);
		}); 
	break;
}
	
};