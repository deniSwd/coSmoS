import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getMyAuth} from "../../Redux/authReducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
      this.props.getMyAuth()
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


export default connect(mapStateToProps, {getMyAuth})(HeaderContainer);