
/*
 * GET home page.
 */

exports.index = function(req, res){
	console.log("hahaah");
  res.render('index', { title: 'Express' });
};