import style from "./ProfileInfo.module.css";
import contentimg from "../../../assets/my images/content.jpg";
import Preloader from "../../Common/Preloader/Preloader";
import React, {useState} from "react";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/my images/userPhoto.jpg";
import ProfileDataForm from "./profileDataForm";
import ProfileData from "./ProfileData";

const ProfileInfo = (props) => {
    let [editMode, setState] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (event) => {
        if (event.target.files.length) {
            props.savePhoto(event.target.files[0])
        }
    }

    const activateEdit = () => {
        setState(true)
    }
    const onSubmit = (formData) => {
        props.saveProfile(formData).then(()=>{
            setState(false)
        })

    }

    return (
        <div>
            <div className={style.contentImg}>
                <img src={contentimg}/>
            </div>
            <div className={style.content}>
                <div>
                    <img src={props.profile.photos.small || userPhoto}/>
                </div>
                <div>
                    {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                </div>
                <div>
                    <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                </div>
                <div>
                    {editMode ? <ProfileDataForm initialValues = {props.profile} profile ={props.profile} onSubmit={onSubmit} /> :
                        <ProfileData profile ={props.profile} isOwner = {props.isOwner} activateEdit = {activateEdit}/>}
                </div>
            </div>
        </div>
    );
}



export default ProfileInfo;