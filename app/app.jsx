const React = require('react');
const ReactDOM = require('react-dom');

/* Import Components */
const HelloWorld = require('./components/HelloWorld');
const MainPage = require('./components/MainPage');

ReactDOM.render(<MainPage />, document.getElementById('main'));