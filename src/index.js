import * as serviceWorker from './serviceWorker';
import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, changeNewPostVal} from './redux/state';

const rerenderAll = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} changeNewPostVal={changeNewPostVal}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderAll(state);

subscribe(rerenderAll)

serviceWorker.unregister();
