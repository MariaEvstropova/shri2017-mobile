import React from 'react';
import Chip from 'material-ui/Chip';

import styles from '../../../css/add-products/products-list.css';

export default class ProductsList extends React.Component {
    _handleDelete(item, event) {
        event.preventDefault();

        if (this.props.onDelete && typeof this.props.onDelete === 'function') {
            this.props.onDelete(item);
        }
    }

    render() {
        return (
            <div className='productsList-wrapper'>
                {
                    this.props.products.map((item, index) => {
                        return (
                            <Chip
                                className='productsList-chip'
                                key={index}
                                onRequestDelete={this._handleDelete.bind(this, item)}
                            >
                                {item}
                            </Chip>
                        );
                    })
                }
            </div>
        );
    }
}