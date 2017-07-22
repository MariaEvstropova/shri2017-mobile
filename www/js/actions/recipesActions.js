import request from 'superagent';
import { APP_ID, APP_KEY, yummlyBaseUrl } from './yummly.config';
import * as types from './actionTypes';

export function loadRecipesVariants(query) {
    return function (dispatch) {
        return request
            .get(`${yummlyBaseUrl}/api/recipes`)
            .query(query)
            .set('X-Yummly-App-ID', APP_ID)
            .set('X-Yummly-App-Key', APP_KEY)
            .then(cats => {
                dispatch(loadRecipesSuccess(recipes));
            }).catch(error => {
                throw (error);
            });
    };
}

export function loadRecipesSuccess(recipes) {
    return { 
        type: types.LOAD_RECIPES_SUCCESS, 
        recipes: recipes
    };
}