import React from "react";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {connect} from "react-redux";
import Profile from "../Profile";
import axios from "axios";
import {setUserProfile} from "../../../Redux/profileReducer";


class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/15`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
                <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
      profile: state.profilePage.profile
    }
}

export default connect (mapStateToProps, {setUserProfile})(ProfileContainer);