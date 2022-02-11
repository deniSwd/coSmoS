import React from "react";
import {connect} from "react-redux";
import Profile from "../Profile";
import {getUserProfile, getUserStatus} from "../../../Redux/profileReducer";
import { withRouter} from "react-router-dom"
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus}), withRouter,
    withAuthRedirect)(ProfileContainer)