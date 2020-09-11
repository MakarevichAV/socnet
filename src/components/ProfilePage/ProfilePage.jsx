import React from 'react';
import s from './ProfilePage.module.css';
import UserBar from './UserBar/UserBar';
import Wall from './Wall/Wall';
import Preloader from '../common/Preloader/Preloader';

const ProfilePage = (props) => {
    if (!props.profile) {
        return (
            <Preloader />
        )
    }
    return (
        <div className={`${s.profilePage} container`}>
            <UserBar
                photo={props.profile.photos.large}
                name={props.profile.fullName}
                socials={props.profile.contacts}
            />
            <Wall
                status={props.status}
                jobFlag={props.profile.lookingForAJob}
                jobDescription={props.profile.lookingForAJobDescription}
                updateStatus={props.updateUserStatus}
            />
        </div>
    )
}

export default ProfilePage;