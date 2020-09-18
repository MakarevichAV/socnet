import React from 'react';
import './App.css';
import DialoguesPage from './components/DialoguesPage/DialoguesPage';
import { Route, withRouter } from 'react-router-dom';
import UsersPageContainer from './components/UsersPage/UsersPageContainer';
import ProfilePageContainer from './components/ProfilePage/ProfilePageContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className="App">
                <HeaderContainer />
                <Route path="/profile/:userId?" render={() => <ProfilePageContainer />} />
                <Route path="/dialogues" render={() => <DialoguesPage />} />
                <Route path="/users" render={() => <UsersPageContainer />} />
                <Route path="/login" render={() => <Login />} />
            </div>
        )
    }
}

const mstp = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mstp, { initializeApp })
)(App);