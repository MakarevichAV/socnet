const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROCESS = 'TOGGLE_FOLLOWING_PROCESS';

let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProcess: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                })

            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                })

            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_PROCESS:
            return {
                ...state,
                followingInProcess: action.isFetching
                    ? [...state.followingInProcess, action.userId]
                    : state.followingInProcess.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProcess = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_PROCESS, isFetching, userId });


export default usersReducer;