import { createSelector } from 'reselect';

export const getUsersFromState = (state) => {
    return state.usersPage.users;
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getFetchingStatus = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProcess = (state) => {
    return state.usersPage.followingInProcess;
}