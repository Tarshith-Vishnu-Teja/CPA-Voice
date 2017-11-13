/**
 * New node file
 */
var request = require("request");
var Nexmo = require('nexmo');
var phoneNumber = "";
var request = require("request");

exports.bankbalance = function(req, res, callback){

	var options = { method: 'POST',
	  url: 'https://sandbox-quickbooks.api.intuit.com/v3/company/123145907152884/query',
	  qs: { minorversion: '8' },
	  headers: 
	   { 'postman-token': '18b9704b-518a-8a70-4599-899f4989d245',
	     'cache-control': 'no-cache',
	     authorization: 'Bearer eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..aVtW2A0ByafiVQbJOHKhzw.17_JOJfsgtXBTqrjBMRvf6LZXkuH-R5rO_iqSOP_UtP_Bj9q5hPVPWtX1ya-lznjJE9XZuZz5Tpq31wFhs_FkRZVkMIO6zQYSIS0DYAbSadwkDZP-9YdSe0D4QiNA4yRP1Ty1whC7GqJQ2meSgAcNktgxS_gzMdhpM6XaUEdtgGOBFb6VQeKi8hBBytLQdw4eZihZZ8qNnxL6feX1ZZv32LxEEiJO7Qo78Pe61JMBQFvTDaWdre9V1PgDSXfv4ZnbdHN2RgO9pNy9avu9R0UZ5cdlfYvKGp02W_yaqRCpdweovGTwpXvbICrsxebjBwGsKOHrglrrF5GiYBboto19AxxZN0n7TlhFzUIw-0dmS07jeplf0gqT-hXbYbbBdTgOh_kNDyk7C2nY65zVdlKdINQ_NcJaF9Gtd9YDAJ_yTwwMGODcmgXwIyylKQE2MUdTg45jrPUzBove9tNVSWT-S4fpjWr1TFcqAdCQ8b7MztosK4XXtAMhUeTVImTXjiRbxpVz-rY8xtzfNP4884hz88_wk4u1r1SmEf92V6IlAyjI6OvLlsHDENEh1s5YOlIim5-_0Kfb8mwfE_XuGb1e2KlA05ykAUlqWnY7xRdt5mElOMcu6cecGgsI5wuNzdY7jEAKS_LgoVnoRecv0HFL_Cov2FfMr7-THU8S-u1qO-rUIybcmaVbR-Ll-zTsDxq.PrAZNEKzuqM49qCw-neQVA',
	     'content-type': 'application/text',
	     accept: 'application/json',
	     'user-agent': 'Intuit-qbov3-postman-collection1' },
	  body: 'Select * from Account where AccountType = \'Bank\'' };

	request(options, function (error, response, body) {
	  if (error) throw new Error(error);

	  console.log(body);
	  var resbody = JSON.parse(body).QueryResponse.Account[0];
	  var resString = "Your " + resbody.AccountSubType + " account balance is $" + resbody.CurrentBalance + ", do you want to check your upcoming invoices?";
	  console.log(resString);
	  console.log(error);
	  var myresult = {"speech" : resString};
	  callback(null, myresult);
	});
}


exports.owemoney = function(req, res, callback){
	
	var options = { method: 'POST',
	  url: 'https://sandbox-quickbooks.api.intuit.com/v3/company/123145907152884/query',
	  qs: { minorversion: '8' },
	  headers: 
	   { 'postman-token': '0d26d719-51b1-1a24-cfad-caafab97cb0c',
	     'cache-control': 'no-cache',
	     authorization: 'Bearer eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..aVtW2A0ByafiVQbJOHKhzw.17_JOJfsgtXBTqrjBMRvf6LZXkuH-R5rO_iqSOP_UtP_Bj9q5hPVPWtX1ya-lznjJE9XZuZz5Tpq31wFhs_FkRZVkMIO6zQYSIS0DYAbSadwkDZP-9YdSe0D4QiNA4yRP1Ty1whC7GqJQ2meSgAcNktgxS_gzMdhpM6XaUEdtgGOBFb6VQeKi8hBBytLQdw4eZihZZ8qNnxL6feX1ZZv32LxEEiJO7Qo78Pe61JMBQFvTDaWdre9V1PgDSXfv4ZnbdHN2RgO9pNy9avu9R0UZ5cdlfYvKGp02W_yaqRCpdweovGTwpXvbICrsxebjBwGsKOHrglrrF5GiYBboto19AxxZN0n7TlhFzUIw-0dmS07jeplf0gqT-hXbYbbBdTgOh_kNDyk7C2nY65zVdlKdINQ_NcJaF9Gtd9YDAJ_yTwwMGODcmgXwIyylKQE2MUdTg45jrPUzBove9tNVSWT-S4fpjWr1TFcqAdCQ8b7MztosK4XXtAMhUeTVImTXjiRbxpVz-rY8xtzfNP4884hz88_wk4u1r1SmEf92V6IlAyjI6OvLlsHDENEh1s5YOlIim5-_0Kfb8mwfE_XuGb1e2KlA05ykAUlqWnY7xRdt5mElOMcu6cecGgsI5wuNzdY7jEAKS_LgoVnoRecv0HFL_Cov2FfMr7-THU8S-u1qO-rUIybcmaVbR-Ll-zTsDxq.PrAZNEKzuqM49qCw-neQVA',
	     'content-type': 'application/text',
	     accept: 'application/json',
	     'user-agent': 'Intuit-qbov3-postman-collection1' },
	  body: 'Select GivenName,PrimaryPhone,Balance from Customer order by Balance desc startposition 1 maxresults 1' };

	request(options, function (error, response, body) {
	  if (error) throw new Error(error);
	  var resbody = JSON.parse(body).QueryResponse.Customer[0];
	  var resString =  "Alright, " + resbody.GivenName + " Owes you $" + resbody.Balance + " and is overdue for the last "+Math.floor(Math.random() * 20 + 1) +" days. Do you want to send " + resbody.GivenName + " an SMS reminder?";
	  console.log(body);
	  phoneNumber = resbody.PrimaryPhone.FreeFormNumber;
	  console.log(phoneNumber);
	  var myresult = {"speech" : resString};
	  callback(null, myresult);
	});
	
}

exports.smscustomer = function(req, res, callback){
	console.log("Here");
	

	var nexmo = new Nexmo({
	  apiKey: '36464cca ',
	  apiSecret: '50e261088d8f2b74 ',
	});

	var from = '12017628346';
	//var to = phoneNumber;
	var to = '16692927191';
	var text = 'Hello Kathy, we wanted to remind you that you have an outstanding invoice for $964.57 that is 12 days overdue. It would be greatly appreciated if you pay this invoice as soon as possible. We have sent you your Invoice just in case.';
	
	nexmo.message.sendSms(from, to, text);
	//send email as well
	var options = { method: 'POST',
			  url: 'https://sandbox-quickbooks.api.intuit.com/v3/company/123145907152884/invoice/49/send?sendTo=vishnuteja.hs11@gmail.com',
			  qs: { minorversion: '8' },
			  headers: 
			   { 'postman-token': '0d26d719-51b1-1a24-cfad-caafab97cb0c',
			     'cache-control': 'no-cache',
			     authorization: 'Bearer eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..aVtW2A0ByafiVQbJOHKhzw.17_JOJfsgtXBTqrjBMRvf6LZXkuH-R5rO_iqSOP_UtP_Bj9q5hPVPWtX1ya-lznjJE9XZuZz5Tpq31wFhs_FkRZVkMIO6zQYSIS0DYAbSadwkDZP-9YdSe0D4QiNA4yRP1Ty1whC7GqJQ2meSgAcNktgxS_gzMdhpM6XaUEdtgGOBFb6VQeKi8hBBytLQdw4eZihZZ8qNnxL6feX1ZZv32LxEEiJO7Qo78Pe61JMBQFvTDaWdre9V1PgDSXfv4ZnbdHN2RgO9pNy9avu9R0UZ5cdlfYvKGp02W_yaqRCpdweovGTwpXvbICrsxebjBwGsKOHrglrrF5GiYBboto19AxxZN0n7TlhFzUIw-0dmS07jeplf0gqT-hXbYbbBdTgOh_kNDyk7C2nY65zVdlKdINQ_NcJaF9Gtd9YDAJ_yTwwMGODcmgXwIyylKQE2MUdTg45jrPUzBove9tNVSWT-S4fpjWr1TFcqAdCQ8b7MztosK4XXtAMhUeTVImTXjiRbxpVz-rY8xtzfNP4884hz88_wk4u1r1SmEf92V6IlAyjI6OvLlsHDENEh1s5YOlIim5-_0Kfb8mwfE_XuGb1e2KlA05ykAUlqWnY7xRdt5mElOMcu6cecGgsI5wuNzdY7jEAKS_LgoVnoRecv0HFL_Cov2FfMr7-THU8S-u1qO-rUIybcmaVbR-Ll-zTsDxq.PrAZNEKzuqM49qCw-neQVA',
			     'content-type': 'application/octet-stream',
			     accept: 'application/json',
			     'user-agent': 'Intuit-qbov3-postman-collection1' },
			  body: 'Select GivenName,PrimaryPhone,Balance from Customer order by Balance desc startposition 1 maxresults 1' };

			request(options, function (error, response, body) {
			  if (error) throw new Error(error);		  
			});
	
	
	 var myresult = {"speech" : "We have sent Kathy an SMS reminder, but Kathy is overdue since long time. do you want to give her a call?"};
	  callback(null, myresult);
	
}

exports.callcustomer = function(req, res, callback){
	console.log("call Here");
	

	const nexmo = new Nexmo({
		  apiKey: '36464cca',
		  apiSecret: '50e261088d8f2b74',
		  applicationId: '16e06cbb-86a6-4d3f-be90-e39919429e50',
		  privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCQjnZEZ3aSD7p7D3Ihr4ulYGU6OPLnKlfRE5PLQn7cmp51tvsM8Np/3zBDn5Ype7yKIlGOeoR8DmG9MXj5pUk+F1rd+No44Zf8xgFgs0j++scst2iYXrvXPHi9Gws0nE8CTJqmn9Ceb4odbe0N2hu/si/RKOs5prs2eDNby5d+3qCgLcNK1PEg3s5yMvdkGXfeKeYiNuz2ttGExZF2lw8AS/762NsMMg6/GvnRvRprNm2rvNQ+7jWuD7SqDhmOA5b4yui23qUJje2swH32NxXjpZ7dLmMIrdzU7sjH7FwVL0RhQX7aVfj5T3NUayG7hI7JqltYPnqTtWSYsIHtMwtXAgMBAAECggEAByOJ8qnbYK43KuGh5Mj7EAE5Lo1mbYUZTiF14IlZo4JdRfnx3vs8BymaBBTrAQRz1KyKM4uYZFn/eKzrSQThH5heq+ygtkNp0pliswhXmAQBdxNdrnyrMR9y5P/jZ0c63aWz03u7/T8L5pUpqk/1o9tkYiNvrmqt/ywjeSqOQj0gV5nIR+ZRVbfLBppDTKRT/+J62C3yTUl1fy1tXC3hePJQbF6iX4IyOV1TI3mRTzx+IcA7A+M/LHIYCbGvxZ+McPS8Nd4Xu3eDZNRZonIX5Xn+dKc4gm/7m5yFYb/O0Ln8OvkcwSauu1pB5mHTLabOW2Yzc0SmZnArgeBYpq5FlQKBgQDEDX6qeewLTen5CGHqIWv3knqw15g/CyeHUvoI5gMkJj9fcy2zbwrgydRa7o7a6QDeIwcaI5F5gCLmix+QBFIax5KN7Wvs8X5Sk0CBRUw4XbxUYhc23NjQbxO+jRSSMhdMeow+/p8JXepwXaPgEr8EBQhnX0PxZflpImSoRVmuCwKBgQC8wfl/blia1iZUX6E0lGAsAAdscxhLMAmr1Hc2VY1C3Jjp0+oOzjAtowzCp80sL0pz8v0XePQptvDXJ51it0SP92K85kt6jRs0Z1AYoPYR9Zslzq7UZlNdMFX1Xb/lXu/eg5xlDY0aPOnB2v9K4EKOMU7zqJt8jjpihdm/3h3DZQKBgF7VPEEQKsqpDJVGpb5QHl6p/ykNkHpmVd+Slpm5USmqSptMJn4WJ4fmeQ7nODjR3naVMPlG3TaNcdRc1Y6fWGvVv6FhiAQcKIOe8OPW9nCJfvC+ZgZGu6XPJRjWO24gRr7axH4wQhOQ1zc1RHC+AKHcIV2HamEZd5SQa2ot6ZxTAoGABdgHjm9vJNQOebxANG2HkLUrhasGjIVfN0errS324qQLw+mArJarnS4YHgqt6nlIV9ClD036WTRFvpOGZuD/qWliUDDdE109A2FTdH+/Po0ZEZGVjhPg7tipQKB3aXWH/Z6bf/Fsdex+3DaYgsvwo5BZPmfw8GlC23wDYtJQn5UCgYBp4jw4nIarRMyhRxreTWNU19yPEhfS7BI7bH/j9CjsZ/haeunrXWu73YZfyno2QkpNyb1y+3wWg1rtAqXP+/dKbo3LeSDOOuLkMRM4MGtuEEbeb5h36iB22m4jJ9xThFVjCJbk2p9qF4iL8fTjFXfUWfT5Jkyozf2UxeINHGKqkg==\n-----END PRIVATE KEY-----'
	})

		nexmo.calls.create({
		  from: {
		    type: 'phone',
		    number: '12017628346'
		  },
		  to: [{
		    type: 'phone',
		    number: '16692927191'
		  }],
		  answer_url: ['https://nexmo-community.github.io/ncco-examples/first_call_talk.json']
		}, function(error, response) {
		  if (error) {
		    console.error(error)
		  } else {
		    console.log(response)
		  }
		})
	 var myresult = {"speech" : "We are now calling Kathy..."};
	  callback(null, myresult);
};
