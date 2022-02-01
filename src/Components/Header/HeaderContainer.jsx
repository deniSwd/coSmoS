import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import Header from "./Header";
import {setUserAuthData} from "../../Redux/authReducer";
import {myAuthAPI} from "../../API/api";


class HeaderContainer extends React.Component {
    componentDidMount() {
       myAuthAPI.getMyAuth().then(data => {
            if (data.resultCode === 0) {
                let {id,login,email} = data.data
                this.props.setUserAuthData(id,login,email)
            }

        })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect(mapStateToProps, {setUserAuthData})(HeaderContainer);