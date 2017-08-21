"use strict";

//This file is mocking a web API by hitting hard coded data.
var products = require('./productData.jsx').products;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(product) {
	return product.name.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var ProductApi = {
	getAllProducts: function() {
		return _clone(products); 
	},

	getProductById: function(id) {
		var product = _.find(products, {id: id});
		return _clone(product);
	},
	
	saveproduct: function(product) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the product to the DB via AJAX call...');
		
		if (product.id) {
			var existingProductIndex = _.indexOf(products, _.find(products, {id: product.id})); 
			products.splice(existingProductIndex, 1, product);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new products in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			product.id = _generateId(product);
			products.push(product);
		}

		return _clone(product);
	},

	deleteProduct: function(id) {
		console.log('Pretend this just deleted the product from the DB via an AJAX call...');
		_.remove(products, { id: id});
	}
};

module.exports = ProductApi;