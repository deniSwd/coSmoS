import React from "react";
import {connect} from "react-redux";
import Profile from "../Profile";
import {getUserProfile, getUserStatus, savePhoto, updateUserStatus} from "../../../Redux/profileReducer";
import { withRouter} from "react-router-dom"
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props} updateUserStatus ={this.props.updateUserStatus}
            isOwner ={!this.props.match.params.userId} savePhoto ={this.props.savePhoto}/>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus,updateUserStatus,savePhoto}), withRouter,
    withAuthRedirect)(ProfileContainer)