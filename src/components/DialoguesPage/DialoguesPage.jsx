import React from 'react';
import s from './DialoguesPage.module.css';
import Chat from './Chat/Chat';
import SideBarContainer from './SideBar/SideBarContainer';

const DialoguesPage = () => {
    return (
        <div className={s.chatRoom}>
            <SideBarContainer />
            <Chat />
        </div>
    )
}

export default DialoguesPage;