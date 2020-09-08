import React from 'react';
import s from './UserCard.module.css';
import cn from 'classnames';
import userPhoto from '../../../assets/images/user-photo.jpg';
import { NavLink } from 'react-router-dom';
import { userAPI } from '../../../api/api';

const UserCard = ({ user, unfollow, follow }) => {
    const btnClasses = cn(
        s.btn,
        { [s.follow]: !user.followed },
        { [s.unfollow]: user.followed }
    );
    const photoUrl = user.photos.small != null ? user.photos.small : userPhoto;
    return (
        <div key={user.id} className={s.user}>
            <div className={s.leftSide}>
                <NavLink to={"/profile/" + user.id}>
                    <div className={s.photo}
                        style={{ backgroundImage: `url(${photoUrl})` }}></div>
                </NavLink>
                <button className={btnClasses}
                    onClick={user.followed ?
                        () => {
                            userAPI.setUnfollow(user.id).then(data => {
                                    if (data.resultCode === 0) {
                                        unfollow(user.id)
                                    }
                                });
                        } :
                        () => {
                            userAPI.setFollow(user.id).then(data => {
                                    if (data.resultCode === 0) {
                                        follow(user.id)
                                    }
                                });
                        }}>
                    {user.followed ? 'UNFOLLOW' : 'FOLLOW'}
                </button>
            </div>
            <div className={s.rightSide}>
                <div className={s.names}>
                    <NavLink to={"/profile/" + user.id}>
                        <p className={s.nick}>NickName</p>
                    </NavLink>
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
}

export default UserCard;