import React from 'react';
import s from './Wall.module.css';
import Info from './Info/Info';
import PostsContainer from './Posts/PostsContainer';

const Wall = (props) => {
    return (
        <div className={s.wall}>
            <div className={s.container}>
                <Info {...props} />
            </div>
            <div className={s.container}>
                <PostsContainer />
            </div>
        </div>
    )
}

export default Wall;