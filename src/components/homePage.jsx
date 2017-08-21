"use strict";

var React = require('react');

var Home = React.createClass({
    render: function() {            //render required on any rect component. Whatever is returned is displayed on screen
        return (
            <div className="jumbotron">
                <h3>No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the horizon of the spirit.</h3>
                <p1>Success is the sum of small efforts, repeated day in and day out.</p1>
            </div>
        );
    }
});

module.exports = Home;