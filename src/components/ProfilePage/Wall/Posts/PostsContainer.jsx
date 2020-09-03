import React from 'react';
import Posts from './Posts';
import { addPostAC, changeNewPostVal } from '../../../../redux/profileReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostVal: state.profilePage.newPostVal
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC());
        },
        changePostVal: (val) => {
            dispatch(changeNewPostVal(val));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;