import contentimg from "../assets/my images/content.jpg";
import userimg from "../assets/my images/user.jpg";
import React from "react";
import style from  './Profile.module.css'

const Profile = () => {
    return (
        <div className= {style.content}>
            <div className= {style.contentImg}>
                <img src={contentimg}/>
            </div>
            <div>
                <img src={userimg}/>
            </div>
            <div>
                My Posts
            </div>
            <div>
                New Posts
                <div className={style.item}>
                    Post 1
                </div>
                <div className={style.item}>
                    Post 2
                </div>
            </div>

        </div>
    )
}

export default Profile;