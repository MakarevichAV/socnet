import React from 'react';
import s from './PostCreator.module.css';

const PostCreator = () => {

    const txtArea = React.createRef();

    const addPost = () => {
        const text = txtArea.current.value;
        alert(text);
    }

    return (
        <>
            <div className={s.newPost}>
                <div class={s.photo}></div>
                <textarea class={s.textarea} placeholder="Что у Вас нового?" 
                    ref={txtArea}/>
            </div>
            <button className={`${s.btn} ${s.type1}`} onClick={addPost}>
                Опубликовать
            </button>
        </>
    )

}

export default PostCreator;