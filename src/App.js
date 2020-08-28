import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProfilePage from './components/ProfilePage/ProfilePage';
import DialoguesPage from './components/DialoguesPage/DialoguesPage';
import { Route, BrowserRouter } from 'react-router-dom';

const App = ({ state }) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Route path="/profile" render={() => <ProfilePage state={state.profilePage} />} />
                <Route path="/dialogues" render={() => <DialoguesPage state={state.dialoguesPage} />} />
            </div>
        </BrowserRouter>
    );
}

export default App;
