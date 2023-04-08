import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { HashRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Components/Redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
<HashRouter>
    <App/>
</HashRouter>
</Provider>


  
 
);


