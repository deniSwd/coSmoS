import style from "./ProfileInfo.module.css";
import contentimg from "../../../assets/my images/content.jpg";
import userimg from "../../../assets/my images/user.jpg";
import Preloader from "../../Common/Preloader/Preloader";
import React from "react";

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
                <img src={props.profile.photos.small}/>
            </div>
        </div>
    );
}
export default ProfileInfo;