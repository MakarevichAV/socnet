import React from 'react';
import s from './ProfilePage.module.css';
import UserBar from './UserBar/UserBar';
import Wall from './Wall/Wall';

const ProfilePage = (props) => {
    return (
        <div className={`${s.ProfilePage} container`}>
            <UserBar />
            <Wall store={props.store} />
        </div>
    )
}

export default ProfilePage;