import React from 'react';
import s from './ProfilePage.module.css';
import UserBar from './UserBar/UserBar';
import Info from './Wall/Wall';

const ProfilePage = () => {
    return (
        <div className={`${s.ProfilePage} container`}>
            <UserBar />
            <Info />
        </div>
    )
}

export default ProfilePage;