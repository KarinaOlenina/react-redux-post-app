import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import {configureStore} from "@reduxjs/toolkit";

import './index.css';
import App from './App/App';
import {rootReducer} from "./redux/rootReducer";
import {likesReducer} from "./redux/redusers/likesReducer";


const store = configureStore({reducer: rootReducer});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);

