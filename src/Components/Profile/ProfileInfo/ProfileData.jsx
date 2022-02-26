import style from "./ProfileInfo.module.css";
import React from "react";

const ProfileData = (props) => {
    return (
        <div>
            <div>
                <b>full Name: </b>{props.profile.fullName}
            </div>
            <div>
                <b>looking For A Job: </b>{props.profile.lookingForAJob ? 'YES' : 'NO'}
            </div>
            {props.profile.lookingForAJob &&
            <div>
                <b>looking For A Job Description: </b>{props.profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>aboutMe: </b>{props.profile.aboutMe}
            </div>
            <div>
                <b>Contacts: </b>{Object.keys(props.profile.contacts).map (key=>{
                return <Contacts key = {key} contactTitle={key} contactValue ={props.profile.contacts[key]}/>
            })}
            </div>
            {props.isOwner && <div><button onClick={props.activateEdit}>EDIT</button></div>}
        </div>
    )

}


const Contacts = ({contactTitle, contactValue }) => {
    return <div className={style.contacts}>
        <b>{contactTitle}: </b>{contactValue}
    </div>
}
export default ProfileData