import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';
import PostCreator from './PostCreator/PostCreator';

const Posts = (props) => {

    const posts = props.posts.map((item) => {
        return (
            <div key={item.id} className={s.infoBlock}>
                <Post id={item.id} msg={item.msg} name={item.name} date={item.date} />
            </div>
        )
    });

    return (
        <>
            <div className={s.infoBlock}>
                <PostCreator val={props.newPostVal}
                    addPost={props.addPost} changePostVal={props.changePostVal} />
            </div>
            {posts}
        </>
    )
}

export default Posts;