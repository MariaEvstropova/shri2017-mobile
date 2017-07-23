import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function recipesReducer(state = initialState.recipeDetails, action) {
    switch (action.type) {
        case types.GET_RECIPE_BY_ID_SUCCESS:
            return action.recipeDetails;
        default:
            return state;
    }
}