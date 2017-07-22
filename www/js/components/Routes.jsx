import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App.jsx';
import AddProductsPage from './add-products/AddProductsPage.jsx';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={AddProductsPage} />
    </Route>
);