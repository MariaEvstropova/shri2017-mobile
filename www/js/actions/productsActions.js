import * as types from './actionTypes';

export function addProduct(product) {
    return { 
        type: types.ADD_PRODUCT, 
        product: product
    };
}

export function deleteProduct(product) {
    return { 
        type: types.DELETE_PRODUCT, 
        product: product
    };
}