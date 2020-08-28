import React from 'react';
import s from './Chat.module.css';
import MsgArea from './MsgArea/MsgArea';
import SendArea from './SendArea/SendArea';

const Chat = ({state}) => {
    return (
        <div className={s.chat}>
            <MsgArea msgs={state} />
            <SendArea />
        </div>
    )
}

export default Chat;