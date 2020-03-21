import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { createStore, StoreProvider } from 'easy-peasy'
import model from './store/model'
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(model);

        ReactDOM.render(<StoreProvider store={store}><App /></StoreProvider>, document.getElementById('root'));
serviceWorker.unregister();

