import React from 'react';
import s from './PostCreator.module.css';

const PostCreator = (props) => {

    const onAddPost = () => {
        props.addPost();
    }

    const onChangeVal = (e) => {
        props.changePostVal(e.target.value);
    }

    return (
        <>
            <div className={s.newPost}>
                <div className={s.photo}></div>
                <textarea className={s.textarea} placeholder="Что у Вас нового?"
                    value={props.val} onChange={onChangeVal} />
            </div>
            <button className={`${s.btn} ${s.type1}`} onClick={onAddPost}>
                Опубликовать
            </button>
        </>
    )

}

export default PostCreator;