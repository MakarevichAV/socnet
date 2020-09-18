import { createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from './profileReducer';
import dialoguesReducer from './dialoguesReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import appReducer from './appReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    profilePage: profileReducer, 
    dialoguesPage: dialoguesReducer, 
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;