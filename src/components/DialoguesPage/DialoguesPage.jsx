import React from 'react';
import s from './DialoguesPage.module.css';
import SideBar from './SideBar/SideBar';
import Chat from './Chat/Chat';

const DialoguesPage = ({ dialoguesPage, dispatch }) => {
    return (
        <div className={s.chatRoom}>
            <SideBar dialogues={dialoguesPage.dialogues} />
            <Chat msgs={dialoguesPage.msgs} newMsgVal={dialoguesPage.newMsgVal} 
                dispatch={dispatch} />
        </div>
    )
}

export default DialoguesPage;