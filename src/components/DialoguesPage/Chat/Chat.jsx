import React from 'react';
import s from './Chat.module.css';
import MsgArea from './MsgArea/MsgArea';
import SendArea from './SendArea/SendArea';

const Chat = () => {
    return (
        <div className={s.chat}>
            <MsgArea />
            <SendArea />
        </div>
    )
}

export default Chat;