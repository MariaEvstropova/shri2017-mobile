import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';
import styles from '../css/index.css';

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

        ReactDOM.render(<App />, document.getElementById('app'));
    }
};
app.initialize();
