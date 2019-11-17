import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Image from './Image'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Image src="https://pixabay.com/get/52e6d4424b5aa514f1dc8460825668204022dfe05452774f742f78d4/cat-4611189_640.jpg" alternativeText="Cute cat staring" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
