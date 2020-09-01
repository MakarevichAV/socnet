import React from 'react';
import s from './DialoguesPage.module.css';
import SideBar from './SideBar/SideBar';
import Chat from './Chat/Chat';

const DialoguesPage = () => {
    return (
        <div className={s.chatRoom}>
            <SideBar />
            <Chat />
        </div>
    )
}

export default DialoguesPage;