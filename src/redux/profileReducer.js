import { userAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    profile: null,
    posts: [
        {
            id: 1,
            msg: 'Пост 1333',
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
    ],
    status: ''
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 5,
                msg: action.newPostText,
                name: 'Макар',
                date: '15 сентября в 13:57',
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPostAC = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile });
export const setStatus = (status) => ({ type: SET_STATUS, status: status });

// Санки 
export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId).then(profileData => {
        dispatch(setUserProfile(profileData));
    });
}
export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then( res => {
        dispatch(setStatus(res));
    });
}
export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then( res => {
        if (res.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
}



export default postsReducer;