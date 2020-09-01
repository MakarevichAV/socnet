import React from 'react';
import s from './SideBar.module.css';
import Dialogue from './Dialogue/Dialogue';

const SideBar = (props) => {

    let state = props.store.getState();

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

export default SideBar;