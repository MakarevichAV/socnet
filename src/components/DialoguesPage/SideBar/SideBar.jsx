import React from 'react';
import s from './SideBar.module.css';
import Dialogue from './Dialogue/Dialogue';
import StoreContext from '../../../StoreContext';

const SideBar = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    const dialogues = state.dialoguesPage.dialogues.map((item) => {
                        return (
                            <Dialogue name={item.name} id={item.id} />
                        )
                    })
                    return (
                        <div className={s.sideBar}>
                            {dialogues}
                        </div>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default SideBar;