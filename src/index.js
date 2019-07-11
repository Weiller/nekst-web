import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import * as serviceWorker from './serviceWorker'
import ApplicationRouter from './config/ApplicationRouter'

ReactDOM.render(<ApplicationRouter/>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about application workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
