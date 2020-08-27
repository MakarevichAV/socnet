import React from 'react';
import s from './Dialogue.module.css';
import { NavLink } from 'react-router-dom';

const Dialogue = ({ name, id }) => {

    return (
        <NavLink activeClassName={s.active} to={`/dialogues/${id}`}>
            <div className={s.dialogue}>
                <div className={s.userPhoto}></div>
                <p className={s.userName}>{name}</p>
            </div>
        </NavLink>
    )
}

export default Dialogue;