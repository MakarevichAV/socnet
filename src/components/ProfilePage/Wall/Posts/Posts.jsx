import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';
import PostCreator from './PostCreator/PostCreator';

const Posts = () => {
    return (
        <>
            <div className={s.infoBlock}>
                <PostCreator />
            </div>
            <div className={s.infoBlock}>
                <Post msg="Пост 1" />
            </div>
            <div className={s.infoBlock}>
                <Post msg="Пост 2" />
            </div>
            <div className={s.infoBlock}>
                <Post msg="Пост 3" />
            </div>
        </>
    )
}

export default Posts;