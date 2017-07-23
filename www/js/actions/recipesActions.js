import request from 'superagent';
import { APP_ID, APP_KEY, yummlyBaseUrl } from './yummly.config';
import * as types from './actionTypes';

export function loadRecipesVariants(products) {
    return function (dispatch) {
        let query = '';
        products.forEach((product) => {
            query += `allowedIngredient[]=${product.toLowerCase()}&`;
        });

        return request
            .get(`${yummlyBaseUrl}/api/recipes`)
            .query(query)
            .set('X-Yummly-App-ID', APP_ID)
            .set('X-Yummly-App-Key', APP_KEY)
            .then((result) => {
                if (!result || !result.body) {
                    throw { error: 'BadFunctionalCall' };
                    return;
                }
                const recipes = result.body.matches;
                dispatch(loadRecipesSuccess(recipes));
            }).catch((error) => {
                navigator.notification.alert(
                    ' Something went wrong ≧☉_☉≦ ',
                    null,
                    ' ouch! '
                );
            });
    };
}

export function loadRecipesSuccess(recipes) {
    return {
        type: types.LOAD_RECIPES_SUCCESS,
        recipes: recipes
    };
}