import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsProgress,
    unfollow
} from "../../Redux/UsersReducer";
import axios from "axios";
import Preloader from "../Common/Preloader/Preloader";
import {userAPI} from "../../API/api";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsProgress(true)
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsProgress(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPostChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsProgress(true)
        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsProgress(false)
            this.props.setUsers(data.items)
        })
    }

    render() {
        return (<>
                {this.props.isProgress ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPostChanged={this.onPostChanged}
                       users={this.props.users}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       toggleFollowingProgress={this.props.toggleFollowingProgress}
                       followingInProgress={this.props.followingInProgress}

                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isProgress: state.usersPage.isProgress,
        toggleFollowingProgress: state.usersPage.toggleFollowingProgress,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsProgress,
    toggleFollowingProgress
})(UsersContainer)
