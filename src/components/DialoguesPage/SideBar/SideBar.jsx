import React from 'react';
import s from './SideBar.module.css';
import Dialogue from './Dialogue/Dialogue';

const SideBar = () => {
    return (
        <div className={s.sideBar}>
            <Dialogue name="Ксения" id="1" />
            <Dialogue name="Игорь" id="2" />
            <Dialogue name="Марина" id="3" />
            <Dialogue name="Галина" id="4" />
            <Dialogue name="Твикс" id="5" />
            <Dialogue name="Твикс" id="5" />
            <Dialogue name="Твикс" id="5" />
            <Dialogue name="Твикс" id="5" />
            <Dialogue name="Твикс" id="5" />
        </div>
    )
}

export default SideBar;