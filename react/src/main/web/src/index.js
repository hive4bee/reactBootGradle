import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Switch, Route} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter basename={'/dashboard'}>
        <Switch>
            <Route path={'/main'}>
                <div>hello world, main page</div>
            </Route>
            <Route path={'/ansj'}>
                <div>hello ansj, ansj page</div>
            </Route>
        </Switch>
    </BrowserRouter>
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
