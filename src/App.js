import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProfilePage from './components/ProfilePage/ProfilePage';

const App = () => {
    return (
        <div className="App">
            <Header />
            <ProfilePage />
        </div>
    );
}

export default App;
