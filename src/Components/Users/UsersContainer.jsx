import React from "react";
import {connect} from "react-redux";
import Users from "./UsersClass";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/UsersReducer";



let mapStateToProps = (state) => {
    return {users: state.usersPage.users}
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer