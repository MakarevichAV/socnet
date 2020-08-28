import React from 'react';
import s from './SendArea.module.css';

const SendArea = () => {

    const txtArea = React.createRef();

    const sendMsg = () => {
        const text = txtArea.current.value;
        alert(text);
    }

    return (
        <div className={s.sendArea}>
            <textarea className={s.txtarea} ref={txtArea} />
            <button className={s.btn} onClick={sendMsg}></button>
        </div>
    )
}

export default SendArea;