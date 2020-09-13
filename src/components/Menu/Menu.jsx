import React from 'react';
import s from './Menu.module.css';
import { NavLink } from 'react-router-dom';

const Menu = (props) => {
    return (
        <ul className={s.nav}>
            <li><NavLink to="/profile">Профиль</NavLink></li>
            <li><NavLink to="/dialogues">Сообщения</NavLink></li>
            <li><NavLink to="/users">Друзья</NavLink></li>
            {/* <li><NavLink to="/food">Питание</NavLink></li>
                <li><NavLink to="/activity">Физуха</NavLink></li>
                <li><NavLink to="/trainer">Тренер</NavLink></li> */}
            <li>
                {props.isAuth ?
                    <button onClick={props.logout}>Выйти</button> :
                    <NavLink to="/login">Войти</NavLink>
                }
            </li>
        </ul>
    )
}

export default Menu;