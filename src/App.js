import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProfilePage from './components/ProfilePage/ProfilePage';
import DialoguesPage from './components/DialoguesPage/DialoguesPage';
import { Route } from 'react-router-dom';
import UsersPageContainer from './components/UsersPage/UsersPageContainer';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Route path="/profile" render={() => <ProfilePage />} />
            <Route path="/dialogues" render={() => <DialoguesPage />} />
            <Route path="/users" render={() => <UsersPageContainer />} />
        </div>
    );
}

export default App;
