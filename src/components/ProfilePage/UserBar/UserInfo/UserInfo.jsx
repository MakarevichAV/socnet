import React from 'react';
import s from './UserInfo.module.css';
import defaultPhoto from '../../../../assets/images/user-photo.jpg';

const UserInfo = (props) => {
    // склонение ГОД/ГОДА/ЛЕТ
    // let yearsTxt;
    // if (age <= 20) {
    //     yearsTxt = 'лет';
    // } else if (age > 20) {
    //     if (age % 10 == 1) {
    //         yearsTxt = 'год';
    //     } else if (age % 10 > 1 && age % 10 < 5) {
    //         yearsTxt = 'года';
    //     } else {
    //         yearsTxt = 'лет';
    //     }
    // }

    // const edit = () => {
    //     dispatch(goToEdit({edit: true}));
    // }

    // useEffect(() => {
    //     if (userData.age) {
    //         dispatch(editUserInfo(userData.user));
    //     }    
    // },[userData.age]);
    const userPhoto = {
        backgroundImage: `url(${props.photo ? props.photo : defaultPhoto})`
    }
    
    return (
        <div className={s.info}>
            <div className={s.photo}
                style={userPhoto}></div>
            <p className={s.name}>{props.name}</p>
            <div className={s.data}>
                {/* <InfoItem name="Возраст" value="31" unit="год" />
                <InfoItem name="Рост" value="189" unit="см" />
                <InfoItem name="Вес" value="95" unit="кг" /> */}

                <p className={`${s.item} ${s.underline}`}>
                    <span>Возраст</span>
                    {/* {props.change ?
                        <input name={props.ind} type={type} value={props.value} onChange={props.onChangeValue} /> : */}
                    <span>31 год</span>
                    {/* } */}
                </p>
                <p className={`${s.item} ${s.underline}`}>
                    <span>Рост</span>
                    <span>189 см</span>
                </p>
                <p className={`${s.item} ${s.underline}`}>
                    <span>Вес</span>
                    <span>95 кг</span>
                </p>

            </div>
            <button className={`${s.btn} ${s.type1}`}>Редактировать</button>
        </div>
    )
}

export default UserInfo;