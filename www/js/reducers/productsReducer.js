import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function productsReducer(state = initialState.products, action) {
    switch (action.type) {
        case types.ADD_PRODUCT:
            return [...state, action.product];
        case types.DELETE_PRODUCT:
            return state.filter((item) => {
                return item !== action.product;
            });
        case types.GET_PRODUCT_BY_BARCODE_SUCCESS: 
            return [...state, action.product];
        default:
            return state;
    }
}