import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back.js';
import { hashHistory } from 'react-router'

import styles from '../../css/index.css';

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
                    <AppBar 
                        title='feedme'
                        showMenuIconButton={false}
                        className='appBar'
                        iconElementRight={
                            this.props.location.pathname === App.index ? null :
                            <IconButton onTouchTap={this._handleNavigateBack}>
                                <ArrowBack className='appBar-nagigateHome'/>
                            </IconButton>
                        }
                    />
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}

App.index = '/';
App.recipesList = '/recipeslist';
App.recipeDetails = '/recipedetails';