import React from 'react';
import s from './ProfilePage.module.css';
import UserBar from './UserBar/UserBar';
import Wall from './Wall/Wall';

const ProfilePage = ({ profilePage, dispatch }) => {
    return (
        <div className={`${s.ProfilePage} container`}>
            <UserBar />
            <Wall posts={profilePage.posts} newPostVal={profilePage.newPostVal}
                dispatch={dispatch} />
        </div>
    )
}

export default ProfilePage;