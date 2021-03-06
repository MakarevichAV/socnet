import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import ProfilePage from './ProfilePage';
import { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfileBarData } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfilePageContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <ProfilePage {...this.props} profile={this.props.profile} 
                isOwner={!this.props.match.params.userId}
                updateUserStatus={this.props.updateUserStatus}
                savePhoto={this.props.savePhoto}
                saveProfileBarData={this.props.saveProfileBarData} />
        )
    }

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfileBarData }),
    withRouter,
    withAuthRedirect
)(ProfilePageContainer);