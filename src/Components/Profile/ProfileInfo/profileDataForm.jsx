import React from "react";
import {reduxForm} from "redux-form";
import {fieldCreator} from "../../Common/Textarea,input/fieldCreator";
import {Input} from "../../Common/Textarea,input/input";
import {required} from "../../Common/Validation/validations";
import style from "../../Login/login.Module.css";


const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <b>full Name: </b>{fieldCreator(Input, [], 'fullName', 'full Name')}
            </div>
            <div>
                <b>looking For A Job: </b>{fieldCreator(Input, null, 'lookingForAJob',
                null, {type: 'checkbox'})}
            </div>
            <div>
                <b>My professional skills: </b>{fieldCreator('textarea', [],
                'lookingForAJobDescription', 'My professional skills')}
            </div>
            <div>
                <b>aboutMe: </b> {fieldCreator('textarea', [],
                'aboutMe', 'About me')}
            </div>
            <div>
                <b>Contacts: </b>{Object.keys(props.profile.contacts).map((key) => {
                return <div key = {key}>
                <b> {key}: </b>{fieldCreator(Input, [], 'contacts.'+ key, key)}
                </div>
            })}
            </div>
            {props.error && <div className={style.generalError}>{props.error}</div>}
            <button>SAVE</button>
        </form>
    )
}
const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataReduxForm
