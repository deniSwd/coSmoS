import style from './login.Module.css'
import {reduxForm} from "redux-form";
import {Input} from "../Common/Textarea,input/input";
import {maxLengthCreator, required} from "../Common/Validation/validations";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";
import {fieldCreator} from "../Common/Textarea,input/fieldCreator";
import React from "react";

const maxLength20 = maxLengthCreator(20)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {fieldCreator(Input, [required, maxLength20], 'email', 'Email')}
            {fieldCreator(Input, [required, maxLength20], 'password', 'Password', {type: 'password'})}
            {fieldCreator(Input, null, 'rememberMe', null, {type: 'checkbox'}, 'remember me')}
            {props.error && <div className={style.generalError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to='/profile'/>
    }
    return (<div>
            <div className={style.login}>
                <h1>LOGIN</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login);