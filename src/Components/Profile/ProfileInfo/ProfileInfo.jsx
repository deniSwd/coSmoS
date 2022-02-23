import style from "./ProfileInfo.module.css";
import contentimg from "../../../assets/my images/content.jpg";
import Preloader from "../../Common/Preloader/Preloader";
import React from "react";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/my images/userPhoto.jpg";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={style.contentImg}>
                <img src={contentimg}/>
            </div>
            <div className={style.content}>
                <img src={props.profile.photos.small || userPhoto}/>
                <ProfileStatus status= {props.status} updateUserStatus ={props.updateUserStatus}/>
            </div>
        </div>
    );
}
export default ProfileInfo;