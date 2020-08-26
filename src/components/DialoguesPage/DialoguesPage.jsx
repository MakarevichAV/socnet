import React from 'react';
import s from './DialoguesPage.module.css';

const DialoguesPage = (props) => {
    return (
        <div className={s.chatRoom}>
            <div className={s.sideBar}>
                <div className={`${s.dialogue} ${s.active}`}>
                    <div className={s.userPhoto}></div>
                    <p className={s.userName}>Ксения</p>
                </div>
                <div className={s.dialogue}>
                    <div className={s.userPhoto}></div>
                    <p className={s.userName}>Игорь</p>
                </div>
                <div className={s.dialogue}>
                    <div className={s.userPhoto}></div>
                    <p className={s.userName}>Марина</p>
                </div>
                <div className={s.dialogue}>
                    <div className={s.userPhoto}></div>
                    <p className={s.userName}>Галина</p>
                </div>
                <div className={s.dialogue}>
                    <div className={s.userPhoto}></div>
                    <p className={s.userName}>Твикс</p>
                </div>
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