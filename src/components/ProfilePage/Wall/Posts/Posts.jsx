import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';
import PostCreator from './PostCreator/PostCreator';

const Posts = () => {

    const postsData = [
        {
            id: 1,
            msg: 'Пост 1',
            name: 'Макар',
            date: '25 августа в 13:42',
            likesCount: 23
        },
        {
            id: 2,
            msg: 'Пост 2. Бла бла бла. Я сказал бла блаблабла',
            name: 'Макар',
            date: '25 августа в 13:42',
            likesCount: 12
        },
        {
            id: 3,
            msg: 'Пост 3',
            name: 'Макар',
            date: '25 августа в 13:42',
            likesCount: 6
        },
        {
            id: 4,
            msg: 'Пост 4',
            name: 'Макар',
            date: '25 августа в 13:42',
            likesCount: 17
        }
    ];

    const posts = postsData.map((item) => {
        return (
            <div className={s.infoBlock}>
                <Post id={item.id} msg={item.msg} name={item.name} date={item.date} />
            </div>
        )
    });

    return (
        <>
            <div className={s.infoBlock}>
                <PostCreator />
            </div>
            {posts}
        </>
    )
}

export default Posts;