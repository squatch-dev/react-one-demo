"use strict";

var React = require('react');
var ProductForm = require('./productForm.jsx');
var ProductApi = require('../../productApi.jsx');

var ManageProductPage = React.createClass(
    {
        getInitialState: function() {
            return { 
                product: { id: '', firstName: '', lastName: '' }
            };
        },

        setProductState: function(event){
            var field = event.target.name;
            var value = event.target.value;
            this.state.product[field] = value;
            return this.setState({product: this.state.product});
        },

        saveProduct: function(event){
            event.preventDefault;
            ProductApi.saveProduct(this.state.product);
        },

        render: function()
        {
            return (
                <ProductForm 
                    product={this.state.product} 
                    onChange={this.setProductState}
                    onSave={this.saveProduct} />
            );
        }
    }
);

module.exports = ManageProductPage;