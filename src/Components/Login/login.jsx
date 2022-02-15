import style from './login.Module.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/Textarea,input/input";
import {maxLengthCreator, required} from "../Common/Validation/validations";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";

const maxLength20 = maxLengthCreator(20)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} validate={[required,maxLength20]} name={'email'} placeholder={'Email'}/>
            </div>
            <div>
                <Field component={Input} validate={[required,maxLength20]} name={'password'}
                       type ={'password'} placeholder={'Password'}/>
            </div>
            <div>
                <Field component={Input}  name={'rememberMe'} type={"checkbox"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) => {
    const onSubmit =(formData)=> {
        props.login(formData.email,formData.password,formData.rememberMe)
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

export default connect (mapStateToProps,{login})(Login);