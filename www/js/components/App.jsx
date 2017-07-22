import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import ProductsList from './add-products/ProductsList.jsx';
import AddProductsPage from './add-products/AddProductsPage.jsx';

export default class App extends React.Component {
    render() {
        const styles = {
            appbar: {
                textTransform: 'uppercase'
            }
        };

        return (
            <MuiThemeProvider>
                <div>
                    <AppBar 
                        title="feedme" 
                        showMenuIconButton={false}
                        style={styles.appbar}
                    />
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}