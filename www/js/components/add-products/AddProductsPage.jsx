import React from 'react';
import ProductsList from './ProductsList.jsx';
import ProductsListControls from './ProductsListControls.jsx';

export default class AddProducts extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ProductsList
                    products={this.props.products}
                    onDelete={this.props.onDelete}
                />
                <ProductsListControls
                    onAdd={this.props.onAdd}
                />
            </div>
        );
    }
}