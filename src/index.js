import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>
);


















{/* <App /> */}








//! Ancienne version, ne supporte pas tout
// import { Routes, Route } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
// -> On va englober notre <App/> avec (à la place de <React.StrictMode> si on veut), ce sera le router parent qui va nous permettre d'utiliser les fonctionnalités de React router dans notre application