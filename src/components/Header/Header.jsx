import React from 'react';
import s from './Header.module.css';
import Menu from '../Menu/Menu';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={`wrapper ${s.container}`}>
                <div className={s.logo}></div>
                <Menu />
            </div>
        </header>
    )
}

export default Header;