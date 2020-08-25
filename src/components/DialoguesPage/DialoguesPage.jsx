import React from 'react';
import s from './DialoguesPage.module.css';

const DialoguesPage = (props) => {
    return (
        <div className={`${s.content} container`}>
            <div className={s.sideBar}>
                <div className={s.dialogues}>
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
            </div>
        </div>
    )
}

export default DialoguesPage;