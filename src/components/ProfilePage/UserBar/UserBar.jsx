import React from 'react';
import UserInfo from './UserInfo/UserInfo';
import s from './UserBar.module.css';

const UserBar = (props) => {
    return (
        <div className={s.userBar}>
            <UserInfo {...props} /> 
        </div>
    )
}

export default UserBar;