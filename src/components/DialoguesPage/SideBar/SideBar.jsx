import React from 'react';
import s from './SideBar.module.css';
import Dialogue from './Dialogue/Dialogue';

const SideBar = () => {

    const dialoguesData = [
        { id: 1, name: 'Ксения' },
        { id: 2, name: 'Игорь' },
        { id: 3, name: 'Марина' },
        { id: 4, name: 'Галина' },
        { id: 5, name: 'Твикс' },
    ];

    const dialogues = dialoguesData.map((item) => {
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