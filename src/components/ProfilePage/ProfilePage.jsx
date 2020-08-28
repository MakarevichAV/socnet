import React from 'react';
import s from './ProfilePage.module.css';
import UserBar from './UserBar/UserBar';
import Wall from './Wall/Wall';

const ProfilePage = ({state}) => {
    return (
        <div className={`${s.ProfilePage} container`}>
            <UserBar />
            <Wall state={state.posts}/>
        </div>
    )
}

export default ProfilePage;