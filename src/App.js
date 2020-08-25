import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProfilePage from './components/ProfilePage/ProfilePage';
import DialoguesPage from './components/DialoguesPage/DialoguesPage';
import { Route, BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/dialogues" component={DialoguesPage} />
            </div>
        </BrowserRouter>
    );
}

export default App;
