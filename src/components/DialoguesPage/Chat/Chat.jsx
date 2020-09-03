import React from 'react';
import s from './Chat.module.css';
import SendAreaContainer from './SendArea/SendAreaContainer';
import MsgAreaContainer from './MsgArea/MsgAreaContainer';

const Chat = () => {
    return (
        <div className={s.chat}>
            <MsgAreaContainer />
            <SendAreaContainer />
        </div>
    )
}

export default Chat;