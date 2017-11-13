/**
 * New node file
 */
var ejs = require("ejs");
exports.getInvoice = function(req, res){
	//console.log("this is JSON = " + req.body.toString());
	
	var request = require("request");

	var options = { method: 'GET',
	  url: 'https://sandbox-quickbooks.api.intuit.com/v3/company/123145907152884/invoice/130',
	  headers: 
	   { 'postman-token': '8825602d-9fc4-9ace-25f9-75998e5665d7',
	     'cache-control': 'no-cache',
	     authorization: 'Bearer eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..BTSobolydgtnDbAyz_n_YA.BT-Ye5YBK7vKt2q7dSd0q9-t6Npcz6tOzat3wQCjnhIXABqt-9VoJt1kDs1L9tJ_INeesdR9hODjJtFcZESSgn4g0TKKVQMlKZVnbrzNwD7Jg2pOQCioGHFNjvEfZ0IyehM8sAiOOrZc16TAvjDYOQYDeylI6SjPdoWWPHiQwihofpZgUc3-PYrerHUJxLcluNg6DY4oDvhg6AnKcnlKEhu2-s94-Qhy0ltvgXud1thBNcgdCZ3FZloDRb90BeS4onsCShVu5lheerRnLoUNksiXUZOvn2ksTlcvDd3DJG92wYwYSoAPbQeeTcJVIfqi3hWe31NCp6JSy4yaRZThlNHbQtjNW5Q_1AMZjV2N0sK_A4_H97uYYcdIg85HhmNLyb2JMXCMDlWq9kHl7d9XSY1wmGtv5l9ym59U3At1Wijf0Hwt9k2fl38o47nYIJNOKZPyQzecBKAB1m6no22l3vnr0TPRyjU6arP3yYYYgehMdBPxPSL9A5DFP8_V5y4_v2qTrntm7vap68i5PmXX1ChDqmqQ3i8uvefppeM7i1zTxu_VfwlO-Q8jGrsEpfljElVG53waDddhJ5Zb9WrJPvSvk75K8d5UnjM0m2DYix1B892t8fwSaWIYsl0YPUStdhm-_5uP95Jk5jE6wvLxnXz6TX5TxRKgP6-pZopxTlsoatRmzZhGdB92NXKq9JX2.42lvAObVlznigwTWPqVrSA',
	     accept: 'application/json',
	     'user-agent': 'Intuit-qbov3-postman-collection1' },
	  body: '{}' };

	request(options, function (error, response, body) {
	  if (error) throw new Error(error);

	  console.log(body);
	  res.send({"speech": JSON.parse(body).Invoice.Balance});
	});
	

	
	
}