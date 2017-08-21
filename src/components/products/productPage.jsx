"use strict";

var React = require('react');
var ProductApi = require('../../api/productApi.jsx');
var ProductList = require('./productList.jsx');

var ProductPage = React.createClass({
    getInitialState: function()
    {
        return {
            products: []
        };
    },

    componentDidMount: function(){
        if(this.isMounted()) {
            this.setState({products: ProductApi.getAllProducts()});
        }
    },

    render: function(){
        return (
            <div>
                <h1>Products</h1>
                <ProductList products={this.state.products}/>
            </div>
        );
    }
});

module.exports = ProductPage;