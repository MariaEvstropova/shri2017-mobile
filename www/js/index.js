import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';  
import routes from './components/Routes.jsx';
import configureStore from './store/configureStore';  
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';

var app = {
    initialize: function() {
        this.bindEvents();
    },
    
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    onDeviceReady: function() {
        //Для корректной работы библиотеки компонентов material-ui необходимо использовать injectTapEventPlugin
        injectTapEventPlugin();
        navigator.splashscreen.hide();

        const store = configureStore();

        ReactDOM.render(
            <Provider store={store}>
                <Router history={hashHistory} routes={routes} />
            </Provider>, 
            document.getElementById('app')
        );

        injectGlobal`
            body {
                margin: 0; 
                padding: 0;
            }
        `;
    }
};
app.initialize();
