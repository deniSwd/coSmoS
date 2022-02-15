import style from './login.Module.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/Textarea,input/input";
import {maxLengthCreator, required} from "../Common/Validation/validations";

const maxLength10 = maxLengthCreator(10)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} validate={[required,maxLength10]} name={'email'} placeholder={'Email'}/>
            </div>
            <div>
                <Field component={Input} validate={[required,maxLength10]} name={'password'}
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
        console.log(formData)
    }
    return (<div>
            <div className={style.login}>
                <h1>LOGIN</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}
export default Login;