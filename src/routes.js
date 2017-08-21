"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage.jsx')} />
        <Route name="products" handler={require('./components/products/productPage.jsx')} />
        <Route name="about" handler={require('./components/about/aboutPage.jsx')} />
    </Route>
);

modeul.exports = routes;