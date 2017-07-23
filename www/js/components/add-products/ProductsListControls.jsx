import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import PhotoCamera from 'material-ui/svg-icons/image/photo-camera';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import styles from '../../../css/add-products/product-list-controls.css';

export default class ProductsListControls extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            inputValue: ''
        };

        this._handleRequestOpen = this._handleRequestOpen.bind(this);
        this._handleRequestClose = this._handleRequestClose.bind(this);
        this._handleRequestSubmit = this._handleRequestSubmit.bind(this);
        this._handleInputChange = this._handleInputChange.bind(this);
    }

    _handleRequestOpen(event) {
        event.preventDefault();

        this.setState({
            open: true
        });
    }

    _handleRequestClose() {
        this.setState({
            open: false
        });
    };

    _handleInputChange(event, newValue) {
        this.setState({
            inputValue: newValue
        });
    }

    _handleRequestSubmit() {
        event.preventDefault();

        if (!this.state.inputValue) {
            return;
        }

        if (this.props.onAdd && typeof this.props.onAdd === 'function') {
            this.props.onAdd(this.state.inputValue);
        }

        this.setState({
            open: false
        });
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this._handleRequestClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onTouchTap={this._handleRequestSubmit}
            />
        ];

        return (
            <div>
                <FloatingActionButton
                    className='actionButton actionButton-actionAdd'
                    mini={true}
                    onTouchTap={this._handleRequestOpen}
                >
                    <ContentAdd />
                </FloatingActionButton>

                <FloatingActionButton
                    className='actionButton actionButton-actionFind'
                    onTouchTap={this.props.onFindTap}
                >
                    <Search />
                </FloatingActionButton>

                <FloatingActionButton
                    className='actionButton actionButton-actionBarcode'
                    mini={true}
                    onTouchTap={this.props.onBarcodeTap}
                >
                    <PhotoCamera />
                </FloatingActionButton>

                <Dialog
                    title="Type product's name"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this._handleRequestClose}
                >
                    <TextField
                        hintText="Product's name"
                        className='dialog-textField'
                        onChange={this._handleInputChange}
                    />
                </Dialog>
            </div>
        );
    }
}