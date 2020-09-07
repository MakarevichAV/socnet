import React from 'react';
import './App.css';
import DialoguesPage from './components/DialoguesPage/DialoguesPage';
import { Route } from 'react-router-dom';
import UsersPageContainer from './components/UsersPage/UsersPageContainer';
import ProfilePageContainer from './components/ProfilePage/ProfilePageContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => {
    return (
        <div className="App">
            <HeaderContainer />
            <Route path="/profile/:userId?" render={() => <ProfilePageContainer />} />
            <Route path="/dialogues" render={() => <DialoguesPage />} />
            <Route path="/users" render={() => <UsersPageContainer />} />
        </div>
    );
}

export default App;
