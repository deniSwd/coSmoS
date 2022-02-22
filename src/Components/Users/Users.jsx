import React from 'react';
import Paginator from "../Common/ObjectHelpers/Paginator";
import User from "./User";
import style from './Users.module.css'

const Users = ({totalUsersCount, pageSize, currentPage, onPostChanged, ...props}) => {
    return (
        <div className={style.usersBlock}>
            {props.users.map(u => <User  user ={u}
                                         followingInProgress={props.followingInProgress}
                                         unfollow={props.unfollow}
                                         follow={props.follow}
                                         key={u.id}/>)}
            <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize}
                       currentPage={currentPage} onPostChanged={onPostChanged}/>
        </div>
    )
}
export default Users