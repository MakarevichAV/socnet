import React from 'react';
import s from './UserInfo.module.css';
import defaultPhoto from '../../../../assets/images/user-photo.jpg';

const UserInfo = (props) => {

    const userPhoto = {
        backgroundImage: `url(${props.photo ? props.photo : defaultPhoto})`
    }
    
    return (
        <div className={s.info}>
            <div className={s.photo}
                style={userPhoto}></div>
            <p className={s.name}>{props.name}</p>
            <div className={s.data}>
                {/* <p className={`${s.item} ${s.underline}`}>
                    <span>Возраст</span>
                    <span>31 год</span>
                </p>
                <p className={`${s.item} ${s.underline}`}>
                    <span>Рост</span>
                    <span>189 см</span>
                </p>
                <p className={`${s.item} ${s.underline}`}>
                    <span>Вес</span>
                    <span>95 кг</span>
                </p> */}

            </div>
            <button className={`${s.btn} ${s.type1}`}>Редактировать</button>
        </div>
    )
}

export default UserInfo;