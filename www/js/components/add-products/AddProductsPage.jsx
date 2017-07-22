import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../../actions/productsActions';
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
        this.props.actions.deleteProduct(product);
    }

    _handleRequestAdd(newProduct) {
        const product = this.props.products.find((item) => {
            return item === newProduct;
        });
        
        if (!product) {
            this.props.actions.addProduct(newProduct);
        }
    }

    _handleRequestFind() {

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
        actions: bindActionCreators(productActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductsPage);