import React from 'react';
import { connect } from 'react-redux';
import UsersPage from './UsersPage';
import { followAC, unfollowAC, setUsersAC, setCurrentPage, setTotalUsersCount } from '../../redux/usersReducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPage(page));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCount(totalCount));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);