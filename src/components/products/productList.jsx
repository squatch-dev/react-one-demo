"use strict";

var React = require('react');

var ProductList = React.createClass({
    propTypes: {
        products: React.PropTypes.array.isRequired
    },        

    render: function(){
        var createProductRow = function(product)
        {
            return (
                <tr key={product.id}>
                    <td><a href={"/#products/" + product.id}>{product.id}</a></td>
                    <td>{product.name}</td>
                </tr>
            );
        };

        return (
            <div>
                
                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {this.props.products.map(createProductRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = ProductList;