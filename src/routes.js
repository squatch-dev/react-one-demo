"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
    <Route name="app" path="/" handler={require('./components/app.jsx')}>
        <DefaultRoute handler={require('./components/homePage.jsx')} />
        <Route name="products" handler={require('./components/products/productPage.jsx')} />
        <Route name="about" handler={require('./components/about/aboutPage.jsx')} />
        <Route name="addProduct" path="product" handler={require('./components/products/manageProductPage.jsx')} />
        <NotFoundRoute handler={require('./components/notFoundPage.jsx')} />
    </Route>
);

module.exports = routes;