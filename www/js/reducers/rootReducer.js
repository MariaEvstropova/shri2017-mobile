import { combineReducers } from 'redux';
import recipes from './recipesReducer';
import products from './productsReducer';
import recipeDetails from './recipeDetailsReducer';

const rootReducer = combineReducers({
    recipes: recipes,
    products: products,
    recipeDetails: recipeDetails
});

export default rootReducer;