import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Home from 'material-ui/svg-icons/action/home';
import { Link } from 'react-router';

import styles from '../../css/index.css';

export default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar 
                        title='feedme'
                        showMenuIconButton={false}
                        className='appBar'
                        iconElementRight={
                            <Link to="/">
                                <IconButton>
                                    <Home className='appBar-nagigateHome'/>
                                </IconButton>
                            </Link>
                        }
                    />
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}