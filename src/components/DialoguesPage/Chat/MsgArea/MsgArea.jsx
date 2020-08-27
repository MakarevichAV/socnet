import React from 'react';
import s from './MsgArea.module.css';
import Msg from './Msg/Msg';

const MsgArea = () => {

    const msgsData = [
        {
            id: 1,
            txt: 'Отправленное сообщение 1. Бла бла бла. Бла бла бла',
            direction: 'sended'
        },
        {
            id: 2,
            txt: 'Отправленное сообщение 2. Бла бла бла. Бла бла бла',
            direction: 'sended'
        },
        {
            id: 3,
            txt: 'Отправленное сообщение 3. Бла бла бла. Бла бла бла. Кто понял жизнь, работать перестал',
            direction: 'sended'
        },
        {
            id: 4,
            txt: 'Принятое сообщение 1. Бла бла бла. Бла бла бла',
            direction: 'received'
        },
        {
            id: 5,
            txt: 'Отправленное сообщение 4. Бла бла бла. Бла бла бла',
            direction: 'sended'
        },
        {
            id: 6,
            txt: 'Принятое сообщение 2. Бла бла бла. Бла бла бла',
            direction: 'received'
        },
    ];

    const msgs = msgsData.map((item) => {
        const { id, txt, direction } = item;
        return (
            <Msg text={txt}
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