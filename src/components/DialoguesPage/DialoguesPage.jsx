import React from 'react';
import s from './DialoguesPage.module.css';
import SideBar from './SideBar/SideBar';
import Chat from './Chat/Chat';

const DialoguesPage = ({state}) => {
    return (
        <div className={s.chatRoom}>
            <SideBar dialogues={state.dialogues} />
            <Chat state={state.msgs} />
        </div>
    )
}

export default DialoguesPage;