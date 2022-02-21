import React from 'react';
import Paginator from "../Common/ObjectHelpers/Paginator";
import User from "./User";


const Users = ({totalUsersCount, pageSize, currentPage, onPostChanged, ...props}) => {
    return (
        <div>
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize}
                       currentPage={currentPage} onPostChanged={onPostChanged}/>
            {props.users.map(u => <User  user ={u}
                                         followingInProgress={props.followingInProgress}
                                         unfollow={props.unfollow}
                                         follow={props.follow}
                                         key={u.id}/>)}

        </div>
    )
}
export default Users