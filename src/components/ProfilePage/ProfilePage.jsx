import React from 'react';
import s from './ProfilePage.module.css';
import UserBar from './UserBar/UserBar';
import Wall from './Wall/Wall';

const ProfilePage = () => {
    return (
        <div className={`${s.profilePage} container`}>
            <UserBar />
            <Wall />
        </div>
    )
}

export default ProfilePage;