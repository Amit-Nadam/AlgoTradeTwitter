// dependencies
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// local dependencies
import App from './components/App/App';
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('TwitterAnalysisApp'),
);