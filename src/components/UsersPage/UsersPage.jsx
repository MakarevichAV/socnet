import React from 'react';
import s from './UsersPage.module.css';
import cn from 'classnames';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user-photo.jpg';

const UsersPage = (props) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            });
    }

    const users = props.users.map((user) => {
        const btnClasses = cn(
            s.btn,
            { [s.follow]: !user.followed },
            { [s.unfollow]: user.followed }
        );
        const photoUrl = user.photos.small != null ? user.photos.small : userPhoto;
        return (
            <div key={user.id} className={s.user}>
                <div className={s.leftSide}>
                    <div className={s.photo}
                        style={{ backgroundImage: `url(${photoUrl})` }}></div>
                    <button className={btnClasses}
                        onClick={user.followed ?
                            () => { props.unfollow(user.id) } :
                            () => { props.follow(user.id) }}>
                        {user.followed ? 'UNFOLLOW' : 'FOLLOW'}
                    </button>
                </div>
                <div className={s.rightSide}>
                    <div className={s.names}>
                        <p className={s.nick}>NickName</p>
                        <p className={s.name}>{user.name}</p>
                        <p className={s.status}>Мой статус прост, как краткий тост</p>
                    </div>
                    <div className={s.location}>
                        <p className={s.country}>Israel</p>
                        <p className={s.city}>Tel Aviv</p>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div className={`${s.userPage} container`}>
            {users}
        </div>
    )
}

export default UsersPage;