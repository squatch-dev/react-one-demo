"use strict";

var React = require('react');
var Header = require('./components/common/header.jsx');
var RouteHandler = require('react-router').RouteHandler;

var $ = require('jquery');  // Boostrap expects jquery to be in the global namespace
var jQuery = $;

var App = React.createClass({
    render: function(){
        return (
            <div>
                <Header/>
                <RouteHandler/>
            </div>
        );
    }
});

module.exports = App;