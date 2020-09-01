import React from 'react';
import s from './MsgArea.module.css';
import Msg from './Msg/Msg';
import StoreContext from '../../../../StoreContext';

const MsgArea = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    const msgs = state.dialoguesPage.msgs.map((item) => {
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
            }
        </StoreContext.Consumer>
    )
}

export default MsgArea;