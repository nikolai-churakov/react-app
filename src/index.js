import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import {Provider} from 'react-redux'
import rootReducer from "./redux/rootReducer";

const store = createStore(rootReducer);

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
);
