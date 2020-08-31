import React from 'react';
import s from './Chat.module.css';
import MsgArea from './MsgArea/MsgArea';
import SendArea from './SendArea/SendArea';

const Chat = ({ msgs, newMsgVal, dispatch }) => {
    return (
        <div className={s.chat}>
            <MsgArea msgs={msgs} />
            <SendArea newMsgVal={newMsgVal} 
                dispatch={dispatch} />
        </div>
    )
}

export default Chat;