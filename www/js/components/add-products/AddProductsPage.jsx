import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../../actions/productsActions';
import * as recipesActions from '../../actions/recipesActions';
import ProductsList from './ProductsList.jsx';
import ProductsListControls from './ProductsListControls.jsx';

export class AddProductsPage extends React.Component {
    constructor(props) {
        super(props);

        this._handleRequestDelete = this._handleRequestDelete.bind(this);
        this._handleRequestAdd = this._handleRequestAdd.bind(this);
        this._handleRequestFind = this._handleRequestFind.bind(this);
        this._handleRequestBarcode = this._handleRequestBarcode.bind(this);
        this._handleBarcodeScanned = this._handleBarcodeScanned.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.recipes !== this.props.recipes) {
            if (Array.isArray(newProps.recipes)) {
                if (newProps.recipes.length > 0) {
                    this.props.router.push('/recipeslist');
                } else {
                    navigator.notification.alert(' ¯\_(ツ)_/¯ ', null, ' No recipes for products ');
                }
            } else {
                navigator.notification.alert(' Something went wrong ≧☉_☉≦ ', null, ' ouch! ');
            }
        }
    }

    _handleRequestDelete(product) {
        this.props.productActions.deleteProduct(product);
    }

    _handleRequestAdd(newProduct) {
        const product = this.props.products.find((item) => {
            return item === newProduct;
        });

        if (!product) {
            this.props.productActions.addProduct(newProduct);
        }
    }

    _handleRequestFind(event) {
        event.preventDefault();

        if (!this.props.products) {
            return;
        }

        this.props.recipesActions.loadRecipesVariants(this.props.products);
    }

    _checkSimulator() {
        let isSimulator = false;

        if (window.navigator.simulator === true) {
            navigator.notification.alert('Barcode scanner is not available in the simulator');
            isSimulator = true;
        } else if (window.cordova === undefined) {
            navigator.notification.alert('Barcode scanner not found');
            isSimulator = true;
        }

        return isSimulator;
    }

    _handleBarcodeScanned(barcode) {
        this.props.productActions.getProductByBarcode(barcode);
    }

    _handleRequestBarcode(event) {
        event.preventDefault();

        if (!this._checkSimulator()) {
            cordova.plugins.barcodeScanner.scan(
                (result) => {
                    setTimeout(() => {
                        this._handleBarcodeScanned(result.text);
                    }, 0);
                },
                (error) => {
                    navigator.notification.alert(` Scanning failed: ${error} `);
                },
                {
                    "preferFrontCamera": false,
                    "showFlipCameraButton": false
                }
            );
        }
    }

    render() {
        return (
            <div>
                <ProductsList
                    products={this.props.products}
                    onDelete={this._handleRequestDelete}
                />
                <ProductsListControls
                    onAdd={this._handleRequestAdd}
                    onFindTap={this._handleRequestFind}
                    onBarcodeTap={this._handleRequestBarcode}
                />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        products: state.products,
        recipes: state.recipes
    };
}

function mapDispatchToProps(dispatch) {
    return {
        productActions: bindActionCreators(productActions, dispatch),
        recipesActions: bindActionCreators(recipesActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductsPage);