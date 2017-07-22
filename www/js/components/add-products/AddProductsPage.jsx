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

    _handleRequestBarcode() {

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
        products: state.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        productActions: bindActionCreators(productActions, dispatch),
        recipesActions: bindActionCreators(recipesActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductsPage);