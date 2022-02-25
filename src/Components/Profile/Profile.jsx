import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Poasts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status}
                         updateUserStatus ={props.updateUserStatus}
                         isOwner = {props.isOwner} savePhoto={props.savePhoto}
            />
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;