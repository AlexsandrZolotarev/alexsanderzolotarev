import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Loader from './Loader/loader';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Loader/>
    <App/>
  </React.StrictMode>
);


