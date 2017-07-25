import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back.js';
import { hashHistory } from 'react-router';
import styled from 'styled-components';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this._handleNavigateBack = this._handleNavigateBack.bind(this);
    }

    _handleNavigateBack() {
        hashHistory.goBack();
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <StyledAppBar 
                        title='feedme'
                        showMenuIconButton={this.props.location.pathname !== App.index}
                        iconElementLeft={
                            this.props.location.pathname === App.index ? null :
                            <IconButton onTouchTap={this._handleNavigateBack}>
                                <StyledArrowBack />
                            </IconButton>
                        }
                    />
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}

const StyledAppBar = styled(AppBar)`
    position: fixed !important;
    text-transform: uppercase;
`;

const StyledArrowBack = styled(ArrowBack)`
    color: #fff;
`;

App.index = '/';
App.recipesList = '/recipeslist';
App.recipeDetails = '/recipedetails';