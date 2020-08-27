import React from 'react';
import s from './PostCreator.module.css';

const PostCreator = () => {
    return (
        <>
            <div className={s.newPost}>
                <div class={s.photo}></div>
                <textarea class={s.textarea} placeholder="Что у Вас нового?" />
            </div>
            <button className={`${s.btn} ${s.type1}`}>Опубликовать</button>
        </>
    )
}

export default PostCreator;