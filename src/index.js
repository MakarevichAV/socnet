import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import StoreContext from './StoreContext';

const rerenderAll = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value={store}>
                    <App />
                </StoreContext.Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderAll(store.getState());

store.subscribe(() => {
    rerenderAll(store.getState())
});

serviceWorker.unregister();
