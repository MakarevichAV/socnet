import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const rerenderAll = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} store={store} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderAll(store.getState());

store.subscribe(() => {
    rerenderAll(store.getState())
});

serviceWorker.unregister();
