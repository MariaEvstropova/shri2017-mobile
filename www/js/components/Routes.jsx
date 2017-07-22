import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App.jsx';
import AddProductsPage from './add-products/AddProductsPage.jsx';
import RecipesListPage from './recipes-page/RecipesListPage.jsx';

export default (
    <Route path="/" component={ App }>
        <IndexRoute component={ AddProductsPage } />
        <Route path='/recipeslist' component={ RecipesListPage } />
    </Route>
);