import React from 'react';
import { sendMsgAC, changeNewMsgVal } from '../../../../redux/state';
import s from './SendArea.module.css';

const SendArea = (props) => {

    const sendMsg = () => {
        props.dispatch(sendMsgAC());
    }

    const onChangeVal = (e) => {
        props.dispatch(changeNewMsgVal(e.target.value));
    }

    return (
        <div className={s.sendArea}>
            <textarea className={s.txtarea} value={props.newMsgVal}
                onChange={onChangeVal} />
            <button className={s.btn} onClick={sendMsg}></button>
        </div>
    )
}

export default SendArea;