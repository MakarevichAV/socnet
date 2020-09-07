import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import ProfilePage from './ProfilePage';
import { setUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';

class ProfilePageContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <ProfilePage {...this.props} profile={this.props.profile} />
        )
    }

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

const UrlDataContainer = withRouter(ProfilePageContainer);

export default connect(mapStateToProps,
    { setUserProfile })
    (UrlDataContainer);