import React from 'react';
import s from './UsersPage.module.css';
import cn from 'classnames';

const UsersPage = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://icon-library.net/images/windows-user-icon/windows-user-icon-14.jpg',
                followed: true,
                name: 'Aleksandr Makarevich',
                nickname: 'Makar',
                status: 'Веду здоровый образ жизни',
                location: {
                    country: 'Belarus',
                    city: 'Minsk'
                }
            },
            {
                id: 2,
                photoUrl: 'https://icon-library.net/images/windows-user-icon/windows-user-icon-14.jpg',
                followed: false,
                name: 'Kseniya Makarevich',
                nickname: 'Kuna',
                status: 'Я тоже ЗОЖница еще какая',
                location: {
                    country: 'Israel',
                    city: 'Tel Aviv'
                }
            }
        ])
    }

    const users = props.users.map((user) => {
        const btnClasses = cn(
            s.btn,
            { [s.follow]: !user.followed },
            { [s.unfollow]: user.followed }
        );
        return (
            <div key={user.id} className={s.user}>
                <div className={s.leftSide}>
                    <div className={s.photo}
                        style={{ backgroundImage: `url(${user.photoUrl})` }}></div>
                    <button className={btnClasses}
                        onClick={user.followed ?
                            () => { props.unfollow(user.id) } :
                            () => { props.follow(user.id) }}>
                        {user.followed ? 'UNFOLLOW' : 'FOLLOW'}
                    </button>
                </div>
                <div className={s.rightSide}>
                    <div className={s.names}>
                        <p className={s.nick}>{user.nickname}</p>
                        <p className={s.name}>{user.name}</p>
                        <p className={s.status}>{user.status}</p>
                    </div>
                    <div className={s.location}>
                        <p className={s.country}>{user.location.country}</p>
                        <p className={s.city}>{user.location.city}</p>
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