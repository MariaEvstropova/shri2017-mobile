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
        const styles = {
            chip: {
                margin: '5px',
                backgroundColor: 'rgb(194, 241, 211)',
                borderRadius: '18px'
            },
            label: {
                fontSize: '18px',
                lineHeight: '36px'
            },
            icon: {
                margin: '6px 4px 0px 0px'
            }
        }

        return (
            <div className='productsList-wrapper'>
                {
                    this.props.products.map((item, index) => {
                        return (
                            <Chip
                                key={index}
                                onRequestDelete={this._handleDelete.bind(this, item)}
                                labelStyle={styles.label}
                                style={styles.chip}
                                deleteIconStyle={styles.icon}
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