"use strict";

var React = require('react');
var TextInput = require('../common/textInput.jsx')

var ProductForm = React.createClass({
    
    render: function(){
        return (
            <form>
                <h1>Manage Product</h1>
                
                <TextInput 
                    name="firstName"
                    label="First Name"
                    value={this.props.product.firstName}
                    onChange={this.props.onChange} />

                <TextInput 
                    name="lastName"
                    label="Last Name"
                    value={this.props.product.lastName}
                    onChange={this.props.onChange} />
                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}/>
            </form>
        );
    }
});

module.exports = ProductForm;