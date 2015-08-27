/**
* Model.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	tableName: 'model',
	  attributes: {
	  	key:{
	  		type: 'string'
	  	},
	  	value:{
	  		type: 'string'
	  	},
	  	 creationDate: {
        columnName: 'cre_dt',
        type: 'string',
        defaultsTo: function() { return Date.now().toString();}
    	},
	 //  	afterCreate: function(values, next) {
	 //    var moment = require('moment');
	 //    var vall  = moment().format('YYYY-MM-DDTHH');
	 //    console.log("Exiting date ==="+values.createdAt)
	 //    console.log("new date ==="+ new Date(vall));
	 //    console.log("name === "+vall);
	 //    values.createdAt = vall;
	 //    Model.update({ id: values.id }, values, next);
		// },
	  	toJSON: function () {
	  		var obj = this.toObject();
	  		delete obj.id;
	  		//delete obj.createdAt;
	  		//delete obj.updatedAt;
	  		return obj;
	  	}
	  }
};

