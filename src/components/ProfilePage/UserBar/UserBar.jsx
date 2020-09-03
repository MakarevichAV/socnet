import React from 'react';
import UserInfo from './UserInfo/UserInfo';
import s from './UserBar.module.css';

const UserBar = () => {
    return (
        <div className={s.userBar}>
            <UserInfo /> 
        </div>
    )
}

export default UserBar;