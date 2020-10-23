import React from 'react';
import s from './Wall.module.css';
import InfoWithHooks from './Info/InfoWithHooks';
import PostsContainer from './Posts/PostsContainer';

const Wall = (props) => {
    return (
        <div className={s.wall}>
            <div className={s.container}>
                <InfoWithHooks {...props} />
            </div>
            <div className={s.container}>
                <PostsContainer />
            </div>
        </div>
    )
}

export default Wall;