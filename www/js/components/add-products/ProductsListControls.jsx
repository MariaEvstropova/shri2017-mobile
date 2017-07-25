import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import PhotoCamera from 'material-ui/svg-icons/image/photo-camera';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import styled from 'styled-components';

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
                <StyledButtonAdd
                    mini={true}
                    onTouchTap={this._handleRequestOpen}
                >
                    <ContentAdd />
                </StyledButtonAdd>

                <StyledButtonFind
                    onTouchTap={this.props.onFindTap}
                >
                    <Search />
                </StyledButtonFind>

                <StyledButtonBarcode
                    mini={true}
                    onTouchTap={this.props.onBarcodeTap}
                >
                    <PhotoCamera />
                </StyledButtonBarcode>

                <Dialog
                    title="Type product's name"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this._handleRequestClose}
                >
                    <StyledTextField
                        hintText="Product's name"
                        onChange={this._handleInputChange}
                    />
                </Dialog>
            </div>
        );
    }
}

const StyledButtonAdd = styled(FloatingActionButton)`
    position: fixed;
    bottom: 24px;
    left: calc(50% - 78px);
`;

const StyledButtonFind = styled(FloatingActionButton)`
    position: fixed;
    bottom: 24px;
    left: calc(50% - 28px);
`;

const StyledButtonBarcode = styled(FloatingActionButton)`
    position: fixed;
    bottom: 24px;
    left: calc(50% + 38px);
`;

const StyledTextField = styled(TextField)`
    width: 100%;
    max-width: 100%;
`;