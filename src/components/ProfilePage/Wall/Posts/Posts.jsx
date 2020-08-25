import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
    return (
        <>
            <div className={s.infoBlock}>
                <div className={s.newPost}>
                    <div class={s.photo}></div>
                    <textarea class={s.textarea} placeholder="Что у Вас нового?" />
                </div>
                <button className={`${s.btn} ${s.type1}`}>Опубликовать</button>
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