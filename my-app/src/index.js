import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import { configureStore} from "@reduxjs/toolkit";
import {spamFilter} from "./components/middleware";


import './index.css';
import App from './App/App';
import {rootReducer} from "./redux/rootReducer";


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spamFilter),
});

/*window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);

