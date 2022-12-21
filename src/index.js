import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); 


root.render(
  // we need to wrap out App in the browser router so that we can use the routes we made
  <BrowserRouter>
    <App />
  </BrowserRouter>
)