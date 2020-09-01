import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProfilePage from './components/ProfilePage/ProfilePage';
import DialoguesPage from './components/DialoguesPage/DialoguesPage';
import { Route, BrowserRouter } from 'react-router-dom';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Route path="/profile" render={() => <ProfilePage store={props.store} />} />
                <Route path="/dialogues" render={() => <DialoguesPage store={props.store} />} />
            </div>
        </BrowserRouter>
    );
}

export default App;
