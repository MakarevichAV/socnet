import React from 'react';
import s from './SendArea.module.css';

const SendArea = () => {
    return (
        <div className={s.sendArea}>
            <textarea className={s.txtarea} />
            <button className={s.btn}></button>
        </div>
    )
}

export default SendArea;