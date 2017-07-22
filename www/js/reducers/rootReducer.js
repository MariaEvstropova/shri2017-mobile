import { combineReducers } from 'redux';
import recipes from './recipesReducer';
import products from './productsReducer';

const rootReducer = combineReducers({
    recipes: recipes,
    products: products
});

export default rootReducer;