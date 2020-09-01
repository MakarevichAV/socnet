import React from 'react';
import s from './Chat.module.css';
import MsgArea from './MsgArea/MsgArea';
import SendAreaContainer from './SendArea/SendAreaContainer';

const Chat = (props) => {
    return (
        <div className={s.chat}>
            <MsgArea store={props.store} />
            <SendAreaContainer store={props.store} />
        </div>
    )
}

export default Chat;