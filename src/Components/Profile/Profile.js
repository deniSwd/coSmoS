import contentimg from "../../assets/my images/content.jpg";
import userimg from "../../assets/my images/user.jpg";
import React from "react";
import style from './Profile.module.css';
import MyPosts from './My Poasts/MyPosts';


const Profile = () => {
    return (
        <div className= {style.content}>
            <div className= {style.contentImg}>
                <img src={contentimg}/>
            </div>
            <div>
                <img src={userimg}/>
            </div>
          <MyPosts/>
        </div>
    )
}

export default Profile;