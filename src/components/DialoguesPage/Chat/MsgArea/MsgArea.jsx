import React from 'react';
import s from './MsgArea.module.css';
import Msg from './Msg/Msg';

const MsgArea = (props) => {
    const msgs = props.msgs.map((item) => {
        const { id, txt, direction } = item;
        return (
            <Msg key={id} text={txt}
                sended={direction === 'sended' ? true : null}
                received={direction === 'received' ? true : null}
                id={id} />
        )
    });
    return (
        <div className={s.msgArea}>
            <div className={s.feed}>
                {msgs}
            </div>
        </div>
    )
}

export default MsgArea;