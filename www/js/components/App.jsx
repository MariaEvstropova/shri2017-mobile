import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import ProductsList from './add-products/ProductsList.jsx';
import AddProductsPage from './add-products/AddProductsPage.jsx';

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
                    />
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}