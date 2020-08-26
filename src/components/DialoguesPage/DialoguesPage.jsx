import React from 'react';
import s from './DialoguesPage.module.css';
import { NavLink } from 'react-router-dom';

const DialoguesPage = (props) => {
    return (
        <div className={s.chatRoom}>
            <div className={s.sideBar}>
                <NavLink activeClassName={s.active} to="/dialogues/1">
                    <div className={s.dialogue}>
                        <div className={s.userPhoto}></div>
                        <p className={s.userName}>Ксения</p>
                    </div>
                </NavLink>
                <NavLink activeClassName={s.active} to="/dialogues/2">
                    <div className={s.dialogue}>
                        <div className={s.userPhoto}></div>
                        <p className={s.userName}>Игорь</p>
                    </div>
                </NavLink>
                <NavLink activeClassName={s.active} to="/dialogues/3">
                    <div className={s.dialogue}>
                        <div className={s.userPhoto}></div>
                        <p className={s.userName}>Марина</p>
                    </div>
                </NavLink>
                <NavLink activeClassName={s.active} to="/dialogues/4">
                    <div className={s.dialogue}>
                        <div className={s.userPhoto}></div>
                        <p className={s.userName}>Галина</p>
                    </div>
                </NavLink>
                <NavLink activeClassName={s.active} to="/dialogues/5">
                    <div className={s.dialogue}>
                        <div className={s.userPhoto}></div>
                        <p className={s.userName}>Твикс</p>
                    </div>
                </NavLink>
            </div>
            <div className={s.chat}>
                <div className={s.msgArea}>
                    <div className={s.feed}>
                        <div className={`${s.msg} ${s.sended}`}>отправленное сообщение</div>
                        <div className={`${s.msg} ${s.sended}`}>отправленное сообщение</div>
                        <div className={`${s.msg} ${s.received}`}>принятое сообщение</div>
                        <div className={`${s.msg} ${s.received}`}>принятое сообщение</div>
                        <div className={`${s.msg} ${s.received}`}>принятое сообщение</div>
                        <div className={`${s.msg} ${s.sended}`}>отправленное сообщение</div>
                        <div className={`${s.msg} ${s.received}`}>принятое сообщение</div>
                    </div>
                </div>
                <div className={s.sendArea}>
                    <textarea className={s.txtarea} />
                    <button className={s.btn}></button>
                </div>
            </div>
        </div>
    )
}

export default DialoguesPage;