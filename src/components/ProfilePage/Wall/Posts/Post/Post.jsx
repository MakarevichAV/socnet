import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <>
            <div className={s.info}>
                <div className={s.photo}></div>
                <div className={s.data}>
                    <p className={s.name}>Макар</p>
                    <p className={s.date}>25 августа в 17:40</p>
                </div>
            </div>
            <div className={s.text}>
                {props.msg}
            </div>
        </>
    )
}

export default Post;