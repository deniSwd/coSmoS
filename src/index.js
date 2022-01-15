import React from 'react';
import store from './Redux/Redux-store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import Provider from "react-redux/lib/components/Provider";



    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>

                <App  dispatch={store.dispatch.bind(store)} store={store}/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


