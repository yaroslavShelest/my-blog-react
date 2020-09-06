import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import store from './Redux/store';
import App from './App';


ReactDOM.render(
     <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Provider store={store}>
               <App />
          </Provider>
     </BrowserRouter>,
 document.getElementById('root'));



