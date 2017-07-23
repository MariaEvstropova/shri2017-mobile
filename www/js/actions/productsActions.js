import * as types from './actionTypes';
import request from 'superagent';

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


export function getProductByBarcode(barcode) {
    return function (dispatch) {
        return request
            .get(`https://barcodes.olegon.ru/api/card/name/${barcode}`)
            .then((result) => {
                if (!result || !result.body) {
                    throw { error: 'BadFunctionalCall' };
                    return;
                }
                if (!Array.isArray(result.names) || result.names.length === 0) {
                    navigator.notification.alert(
                        ' No results for barcode ≧☉_☉≦ ',
                        null,
                        ' ouch! '
                    );
                    return;
                }
                const productName = result.body.names[0];
                dispatch(getProductByBarcodeSuccess(productName));
            }).catch((error) => {
                navigator.notification.alert(
                    ' Something went wrong ≧☉_☉≦ ',
                    null,
                    ' ouch! '
                );
            });
    };
}

export function getProductByBarcodeSuccess(productName) {
    return {
        type: types.GET_PRODUCT_BY_BARCODE_SUCCESS,
        product: productName
    };
}