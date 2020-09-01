import React from 'react';
import s from './DialoguesPage.module.css';
import SideBar from './SideBar/SideBar';
import Chat from './Chat/Chat';

const DialoguesPage = (props) => {
    return (
        <div className={s.chatRoom}>
            <SideBar store={props.store} />
            <Chat store={props.store} />
        </div>
    )
}

export default DialoguesPage;