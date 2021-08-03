import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom';


const jsxElement = <h1>Our React App</h1>;
console.log(jsxElement);

ReactDom.render(
    <Router>
        <React.StrictMode>
                <App />
        </React.StrictMode>
    </Router>, 
    document.getElementById('root'));
