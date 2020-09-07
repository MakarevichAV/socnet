import { createStore, combineReducers } from 'redux';
import profileReducer from './profileReducer';
import dialoguesReducer from './dialoguesReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';

let reducers = combineReducers({
    profilePage: profileReducer, 
    dialoguesPage: dialoguesReducer, 
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;