import React from 'react';
import s from './SideBar.module.css';
import Dialogue from './Dialogue/Dialogue';
import { Redirect } from 'react-router-dom';

const SideBar = (props) => {
    const dialogues = props.dialogues.map((item) => {
        return (
            <Dialogue key={item.id} name={item.name} id={item.id} />
        )
    })
    if (!props.isAuth) {
        return <Redirect to="/login" />
    }
    return (
        <div className={s.sideBar}>
            {dialogues}
        </div>
    )
}

export default SideBar;