import React from 'react';
import { connect } from 'react-redux';
import {
    follow, unfollow, setCurrentPage,
    toggleFollowingProcess, getUsers
} from '../../redux/usersReducer';
import UserPage from './UserPage';
import Preloader from '../common/Preloader/Preloader';
import { 
    getUsersFromState, getPageSize, 
    getUsersCount, getCurrentPage,
    getFetchingStatus, getFollowingInProcess
} from '../../redux/usersSelectors';

    class UsersPageContainer extends React.Component {

        componentDidMount() {
            this.props.getUsers(this.props.pageSize, this.props.currentPage);
        }

        onPageChanged = (number) => {
            this.props.setCurrentPage(number);
            this.props.getUsers(this.props.pageSize, number);
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
                        followingInProcess={this.props.followingInProcess} />
                </>
            )
        }
    }

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProcess: state.usersPage.followingInProcess
//     }
// }

const mapStateToProps = (state) => {
    return {
        users: getUsersFromState(state),
        pageSize: getPageSize(state),
        totalUsersCount: getUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getFetchingStatus(state),
        followingInProcess: getFollowingInProcess(state)
    }
}

export default connect(mapStateToProps,
    {
        follow, unfollow, setCurrentPage,
        toggleFollowingProcess,
        getUsers
    })
    (UsersPageContainer);