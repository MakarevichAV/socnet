import React from 'react';
import s from './PostInfo.module.css';

const PostInfo = ({ name, date }) => {
    return (
        <div className={s.info}>
            <div className={s.photo}></div>
            <div className={s.data}>
                <p className={s.name}>{name}</p>
                <p className={s.date}>{date}</p>
            </div>
        </div>
    )
}

export default PostInfo;