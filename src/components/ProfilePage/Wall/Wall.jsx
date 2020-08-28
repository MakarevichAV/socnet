import React from 'react';
// import {useSelector} from './node_modules/react-redux';
import s from './Wall.module.css';
import Info from './Info/Info';
import Posts from './Posts/Posts';

const Wall = ({state}) => {
    return (
        <div className={s.wall}>
            <div className={s.container}>
                <Info />
            </div>
            <div className={s.container}>
                <Posts posts={state}/>
            </div>
        </div>
    )
}

export default Wall;