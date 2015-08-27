/**
 * ModelController
 *
 * @description :: Server-side logic for managing models
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var url = require('url');
var moment = require('moment');
function getAllData(cb){
			var myquery = Model.find();
			//myquery.where({'key':key , 'creationDate': timestamp })

			myquery.sort('creationDate ASC');

			myquery.exec(function (err, argument) {
				if(!err){
					console.log(argument)
					cb(argument);
				}else
				{
					console.log(err)
				}
			})
}

function getDataWithTimeStamp (key,timestamp,cb) {
	var myquery = Model.find();
			myquery.where({'key':key , 'creationDate': timestamp })

			myquery.sort('creationDate ASC');

			myquery.exec(function (err, argument) {
				if(!err){
					console.log(argument)
					cb(argument);
				}else
				{
					console.log(err)
				}
			})
}

function getData (key,cb) {
	var myquery = Model.find({
			key :{
				'contains' : key
			},
			limit: 1
		});
		myquery.sort('creationDate DESC');

		myquery.exec(function (err, argument) {
			if(!err){
				console.log(argument)
				//res.json(argument)
				cb(argument);				
			}else
			{
				console.log(err)
			}
		})
}

module.exports = {
	find: function (req,res){
		console.log("Path => "+req.path);
		console.log("Params =>"+req.allParams());
		var r = req.url;
		//////console.log(r);
		var urlInfo = url.parse(r,true)
		//console.log(urlInfo);
		var q = urlInfo.query.key;
		//console.log(q);

		var myquery = Model.find({
			key :{
				'contains' : q
			},
			limit: 1
		});
		myquery.sort('creationDate DESC');

		myquery.exec(function (err, argument) {
			if(!err){
				console.log(argument)
				res.json(argument)
			}else
			{
				console.log(err)
			}
		})
	},

	findOne: function (req,res){
		
		var r = req.url;
		console.log(r);
		var urlInfo = url.parse(r,true)
		console.log(urlInfo);
		var q_timestamp = urlInfo.query.timestamp;
		console.log("time is => "+q_timestamp)
		if(q_timestamp){
			var myDate =  q_timestamp;
			console.log("date"+myDate);

			console.log("Date => "+myDate);
			getDataWithTimeStamp(req.params.id,myDate, function (argument) {
			res.json(argument);
			});			
		}else{
			getData(req.params.id, function (argument) {
			res.json(argument);
			});
		}
		
	},
	getAllObjects: function (req,res){
		getAllData(function (argument) {
			res.json(argument);
			});
	}
};


