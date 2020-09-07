import React from 'react';
import s from './Pagination.module.css';

const Pagination = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (i <= 11 && props.currentPage <= 6) {
            pages.push(i);
        } else if (props.currentPage - i <= 5 && i - props.currentPage <= 5) {
            pages.push(i);
        }
    }
    const pageNumbers = pages.map((number) => {
        return (
            <span key={number} className={`${props.currentPage === number && s.selected} ${s.paginationItem}`}
                onClick={() => props.onPageChanged(number)}>{number}</span>
        )
    });
    return (
        <div className={s.pagination}>
            {pages[0] >= 2 ? <span className={s.paginationItem}
                onClick={() => props.onPageChanged(1)}>...</span> : null}
            {pageNumbers}
            {pages[pageNumbers.length - 1] <= pagesCount - 1 ? <span className={s.paginationItem}
                onClick={() => props.onPageChanged(pagesCount)}>...</span> : null}
        </div>
    )
}

export default Pagination;