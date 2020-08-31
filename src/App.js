import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProfilePage from './components/ProfilePage/ProfilePage';
import DialoguesPage from './components/DialoguesPage/DialoguesPage';
import { Route, BrowserRouter } from 'react-router-dom';

const App = ({ state, dispatch }) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Route path="/profile" render={() => <ProfilePage profilePage={state.profilePage} 
                    dispatch={dispatch} />} />
                <Route path="/dialogues" render={() => <DialoguesPage dialoguesPage={state.dialoguesPage} 
                    dispatch={dispatch} />} />
            </div>
        </BrowserRouter>
    );
}

export default App;
