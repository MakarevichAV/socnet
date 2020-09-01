import React from 'react';
import s from './Chat.module.css';
import MsgArea from './MsgArea/MsgArea';
import SendAreaContainer from './SendArea/SendAreaContainer';

const Chat = () => {
    return (
        <div className={s.chat}>
            <MsgArea />
            <SendAreaContainer />
        </div>
    )
}

export default Chat;