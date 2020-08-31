import React from 'react';
// import {useSelector} from './node_modules/react-redux';
import s from './Wall.module.css';
import Info from './Info/Info';
import Posts from './Posts/Posts';

const Wall = ({posts, newPostVal, addPost, changeNewPostVal}) => {
    return (
        <div className={s.wall}>
            <div className={s.container}>
                <Info />
            </div>
            <div className={s.container}>
                <Posts posts={posts} newPostVal={newPostVal} 
                    addPost={addPost} changeNewPostVal={changeNewPostVal} />
            </div>
        </div>
    )
}

export default Wall;