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
	  	toJSON: function () {
	  		var obj = this.toObject();
	  		delete obj.id;
	  		delete obj.createdAt;
	  		delete obj.updatedAt;
	  		return obj;
	  	}
	  }
};

