import React from 'react';
import s from './PostCreator.module.css';

const PostCreator = (props) => {

    const addPost = () => {
        props.addPost();
    }

    const onChangeVal = (e) => {
        props.changeVal(e.target.value);
    }

    return (
        <>
            <div className={s.newPost}>
                <div class={s.photo}></div>
                <textarea class={s.textarea} placeholder="Что у Вас нового?" 
                    value={props.val} onChange={onChangeVal}/>
            </div>
            <button className={`${s.btn} ${s.type1}`} onClick={addPost}>
                Опубликовать
            </button>
        </>
    )

}

export default PostCreator;