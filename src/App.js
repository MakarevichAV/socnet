import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';

// import UsersPageContainer from './components/UsersPage/UsersPageContainer';
// import ProfilePageContainer from './components/ProfilePage/ProfilePageContainer';
// import DialoguesPage from './components/DialoguesPage/DialoguesPage';
// import Login from './components/Login/Login';
const ProfilePageContainer = React.lazy(() => import('./components/ProfilePage/ProfilePageContainer'));
const UsersPageContainer = React.lazy(() => import('./components/UsersPage/UsersPageContainer'));
const DialoguesPage = React.lazy(() => import('./components/DialoguesPage/DialoguesPage'));
const Login = React.lazy(() => import('./components/Login/Login'));

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
                <Route path="/profile/:userId?" render={withSuspense(ProfilePageContainer)} />
                <Route path="/dialogues" render={withSuspense(DialoguesPage)} />
                <Route path="/users" render={withSuspense(UsersPageContainer)} />
                <Route path="/login" render={withSuspense(Login)} />
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