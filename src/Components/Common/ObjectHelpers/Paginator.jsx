import React from 'react';
import style from "./Paginator.module.css";


const Paginator = ({totalUsersCount, pageSize, currentPage, onPostChanged}) => {
    let pageCount = Math.ceil(totalUsersCount / pageSize)
    let page = []
    for (let i = 1; i <= pageCount; i++) {
        page.push(i)
    }
    return (
        <div className={style.content}>
            {page.map(p => {
                return <span className={currentPage === p && style.selectedPage}
                             onClick={(event) => {
                                 onPostChanged(p)
                             }}>{p}</span>
            })}
        </div>
    )
}
export default Paginator