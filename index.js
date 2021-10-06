// import React from 'react';
// import ReactDOM from 'react-dom';
// import './styles/App.scss';
// import App from './App';
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const express = require('express');
const PORT = process.env.PORT || 5000;

const app = express();

const start = () => {
    try {
        app.listen(PORT, () => `server started on port ${PORT}`);
    } catch(e) {
        console.log(e);
    }
}

start();