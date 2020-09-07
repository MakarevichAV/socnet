import React from 'react';
import s from './UsersPage.module.css';
import Pagination from './Pagination/Pagination';
import UserCard from './UserCard/UserCard';

const UserPage = (props) => {
    const users = props.users.map((user) => {
        return (
            <UserCard user={user} unfollow={props.unfollow} follow={props.follow} />
        )
    });
    return (
        <div className={`${s.userPage} container`}>
            <Pagination totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} 
                onPageChanged={props.onPageChanged} />
            {users}
            <Pagination totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} 
                onPageChanged={props.onPageChanged} />
        </div>
    )
}

export default UserPage;