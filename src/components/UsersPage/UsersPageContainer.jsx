import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {
    follow, unfollow,
    setUsers, setCurrentPage,
    setTotalUsersCount, toggleIsFetching
} from '../../redux/usersReducer';
import UserPage from './UserPage';
import Preloader from '../common/Preloader/Preloader';

class UsersPageContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (number) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(number);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${number}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
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
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps,
    { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching })
    (UsersPageContainer);