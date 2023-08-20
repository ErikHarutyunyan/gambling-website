import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import {FontStyle} from "./themes/FontStyle"
import {GlobalStyle} from "./themes/GlobalStyle"
// import setupInterceptors from "./services/setupInterceptors";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  // <React.StrictMode>
    <Provider store={store}>
        <FontStyle />
        <GlobalStyle />
        <App />
    </Provider>
  // </React.StrictMode>
);


