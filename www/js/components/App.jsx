import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import ProductsList from './add-products/ProductsList.jsx';
import AddProductsPage from './add-products/AddProductsPage.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };

        this._handleRequestDelete = this._handleRequestDelete.bind(this);
        this._handleRequestAdd = this._handleRequestAdd.bind(this);
    }

    _handleRequestDelete(product) {
        this.setState({
            products: this.state.products.filter((item) => { return item !== product; })
        });
    }

    _handleRequestAdd(newProduct) {
        if (!newProduct) {
            return;
        }

        let product = this.state.products.find((item) => { return item === newProduct; });
        if (!product) {
            this.setState({
                products: this.state.products.concat([newProduct])
            });
        }
    }

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
                    <AddProductsPage 
                        products={this.state.products}
                        onAdd={this._handleRequestAdd}
                        onDelete={this._handleRequestDelete}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}