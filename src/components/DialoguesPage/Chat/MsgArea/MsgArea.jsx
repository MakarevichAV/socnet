import React from 'react';
import s from './MsgArea.module.css';
import Msg from './Msg/Msg';

const MsgArea = () => {
    return (
        <div className={s.msgArea}>
            <div className={s.feed}>
                <Msg text="Отправленное сообщение" sended />
                <Msg text="Отправленное сообщение" sended />
                <Msg text="Принятое сообщение" received />
                <Msg text="Принятое сообщение" received />
                <Msg text="Отправленное сообщение" sended />
                <Msg text="Отправленное сообщение" sended />
                <Msg text="Принятое сообщение" received />
                <Msg text="Отправленное сообщение" sended />
                <Msg text="Принятое сообщение" received />
                <Msg text="Отправленное сообщение" sended />
            </div>
        </div>
    )
}

export default MsgArea;