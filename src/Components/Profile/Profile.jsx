
import React from "react";
import MyPosts from './My Poasts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsFromIndex={props.postsFromIndex}/>
        </div>
    )
}

export default Profile;