/**
 * ModelController
 *
 * @description :: Server-side logic for managing models
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var url = require('url');

module.exports = {
	find: function (req,res){
		var r = req.url;
		console.log(r);
		var urlInfo = url.parse(r,true)
		console.log(urlInfo);
		var q = urlInfo.query.key;
		console.log(q);

		Model.find({
			key :{
				'contains' : q
			},
			limit: 1
		}).exec(function (err, argument) {
			if(!err){
				console.log(argument)
				res.json(argument)
			}else
			{
				console.log(err)
			}
		})
	}
};

