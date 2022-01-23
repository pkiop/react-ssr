import React from 'react';
import ReactDOM, { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { loadableReady } from '@loadable/component';

loadableReady(() => {
  const rootElement = document.getElementById('root');
  hydrate(
    <BrowserRouter>
      <>
        <App />
      </>
    </BrowserRouter>,
    rootElement
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
