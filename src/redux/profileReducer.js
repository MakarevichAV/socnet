import { userAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const CHANGE_NEW_POST_VAL = 'CHANGE_NEW_POST_VAL';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
    newPostVal: ''
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 5,
                msg: state.newPostVal,
                name: 'Макар',
                date: '28 августа в 14:55',
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostVal: ''
            }
        }
        case CHANGE_NEW_POST_VAL: {
            return {
                ...state,
                newPostVal: action.newVal
            }
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export const addPostAC = () => ({ type: ADD_POST });
export const changeNewPostVal = (newVal) => ({ type: CHANGE_NEW_POST_VAL, newVal: newVal });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile });

// Санки 
export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId).then(profileData => {
        dispatch(setUserProfile(profileData));
    });
}

export default postsReducer;