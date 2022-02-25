import style from "./ProfileInfo.module.css";
import contentimg from "../../../assets/my images/content.jpg";
import Preloader from "../../Common/Preloader/Preloader";
import React from "react";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/my images/userPhoto.jpg";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (event) => {
        if (event.target.files.length) {
            props.savePhoto(event.target.files[0])
        }
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
                    <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                </div>
                <div>
                    {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                </div>
            </div>
        </div>
    );
}
export default ProfileInfo;