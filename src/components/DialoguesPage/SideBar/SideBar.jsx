import React from 'react';
import s from './SideBar.module.css';
import Dialogue from './Dialogue/Dialogue';

const SideBar = (props) => {
    const dialogues = props.dialogues.map((item) => {
        return (
            <Dialogue key={item.id} name={item.name} id={item.id} />
        )
    })
    return (
        <div className={s.sideBar}>
            {dialogues}
        </div>
    )
}

export default SideBar;