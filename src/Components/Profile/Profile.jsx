
import React from "react";
import MyPosts from './My Poasts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     updateNewPostText={props.updateNewPostText}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}/>
        </div>
    )
}

export default Profile;