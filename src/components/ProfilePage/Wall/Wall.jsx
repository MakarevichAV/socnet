import React from 'react';
import s from './Wall.module.css';
import Info from './Info/Info';
import PostsContainer from './Posts/PostsContainer';

const Wall = () => {
    return (
        <div className={s.wall}>
            <div className={s.container}>
                <Info />
            </div>
            <div className={s.container}>
                <PostsContainer />
            </div>
        </div>
    )
}

export default Wall;