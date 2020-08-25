import React from 'react';
import s from './Info.module.css';
import InfoItem from '../InfoItem/InfoItem';

const Info = () => {
    return (
        <>
            <p className={s.head}>Рекомендации</p>
            <div className={s.infoBlock}>
                <InfoItem name="Норма веса"
                    value="70 - 90"
                    unit="кг" underline important />
                <InfoItem name="Оптимальный вес"
                    value="89"
                    unit="кг" underline important />
            </div>
            <div className={s.infoBlock}>
                <InfoItem name="Суточная норма"
                    value unit head />
                <InfoItem name="Калории"
                    value="2700"
                    unit="кКал/день" underline />
                <InfoItem name="Белки"
                    value="120"
                    unit="г/день" underline />
                <InfoItem name="Жиры"
                    value="60"
                    unit="г/день" underline />
                <InfoItem name="Углеводы"
                    value="100"
                    unit="г/день" underline />
                <InfoItem name="Вода"
                    value="3"
                    unit="л/день" underline blue />
            </div>
        </>
    )
}

export default Info;