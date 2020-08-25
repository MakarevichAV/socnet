import React from 'react';
import s from './Menu.module.css';

const Menu = () => {
    return (
        <ul className={s.nav}>
            <li><a href="#">Профиль</a></li>
            <li><a href="#">Питание</a></li>
            <li><a href="#">Физуха</a></li>
            <li><a href="#">Тренер</a></li>
        </ul>
    )
}

export default Menu;