import React from 'react';
import { connect } from 'react-redux';
import {
    follow, unfollow,
    setUsers, setCurrentPage,
    setTotalUsersCount, toggleIsFetching,
    toggleFollowingProcess
} from '../../redux/usersReducer';
import UserPage from './UserPage';
import Preloader from '../common/Preloader/Preloader';
import { userAPI } from '../../api/api';

class UsersPageContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        userAPI.getUsers(this.props.pageSize, this.props.currentPage).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    onPageChanged = (number) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(number);
        userAPI.getUsers(this.props.pageSize, number).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
            });
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <UserPage onPageChanged={this.onPageChanged}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    toggleFollowingProcess={this.props.toggleFollowingProcess}
                    followingInProcess={this.props.followingInProcess}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProcess: state.usersPage.followingInProcess
    }
}

export default connect(mapStateToProps,
    { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProcess })
    (UsersPageContainer);