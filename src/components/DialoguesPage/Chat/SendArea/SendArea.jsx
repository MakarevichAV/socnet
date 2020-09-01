import React from 'react';
import s from './SendArea.module.css';

const SendArea = (props) => {

    const onSendMsg = () => {
        props.sendMsg();
    }

    const onChangeVal = (e) => {
        props.changeVal(e.target.value);
    }

    return (
        <div className={s.sendArea}>
            <textarea className={s.txtarea} value={props.val}
                onChange={onChangeVal} />
            <button className={s.btn} onClick={onSendMsg}></button>
        </div>
    )
}

export default SendArea;