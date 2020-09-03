import React from 'react';
import s from './UsersPage.module.css';
import cn from 'classnames';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user-photo.jpg';

class UsersPage extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (number) => {
        this.props.setCurrentPage(number);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${number}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            if (i <= 11 && this.props.currentPage <= 6) {
                pages.push(i);
            } else if (this.props.currentPage - i <= 5 && i - this.props.currentPage <= 5) {
                pages.push(i);
            }
        }
        const pageNumbers = pages.map((number) => {
            return (
                <span key={number} className={`${this.props.currentPage === number && s.selected} ${s.paginationItem}`}
                    onClick={() => this.onPageChanged(number)}>{number}</span>
            )
        });
        const users = this.props.users.map((user) => {
            const btnClasses = cn(
                s.btn,
                { [s.follow]: !user.followed },
                { [s.unfollow]: user.followed }
            );
            const photoUrl = user.photos.small != null ? user.photos.small : userPhoto;
            return (
                <div key={user.id} className={s.user}>
                    <div className={s.leftSide}>
                        <div className={s.photo}
                            style={{ backgroundImage: `url(${photoUrl})` }}></div>
                        <button className={btnClasses}
                            onClick={user.followed ?
                                () => { this.props.unfollow(user.id) } :
                                () => { this.props.follow(user.id) }}>
                            {user.followed ? 'UNFOLLOW' : 'FOLLOW'}
                        </button>
                    </div>
                    <div className={s.rightSide}>
                        <div className={s.names}>
                            <p className={s.nick}>NickName</p>
                            <p className={s.name}>{user.name}</p>
                            <p className={s.status}>Мой статус прост, как краткий тост</p>
                        </div>
                        <div className={s.location}>
                            <p className={s.country}>Israel</p>
                            <p className={s.city}>Tel Aviv</p>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div className={`${s.userPage} container`}>
                <div className={s.pagination}>
                    {pages[0] >= 2 ? <span className={s.paginationItem}
                                            onClick={() => this.onPageChanged(1)}>...</span> : null}
                    {pageNumbers}
                    {pages[pageNumbers.length - 1] <= pagesCount - 1 ? <span className={s.paginationItem}
                                            onClick={() => this.onPageChanged(pagesCount)}>...</span> : null}
                </div>
                {users}
                <div className={s.pagination}>
                    {pages[0] >= 2 ? <span className={s.paginationItem}
                                            onClick={() => this.onPageChanged(1)}>...</span> : null}
                    {pageNumbers}
                    {pages[pageNumbers.length - 1] <= pagesCount - 1 ? <span className={s.paginationItem}
                                            onClick={() => this.onPageChanged(pagesCount)}>...</span> : null}
                </div>
            </div>
        )
    }
}

export default UsersPage;