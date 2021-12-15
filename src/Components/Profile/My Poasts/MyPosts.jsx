import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>
                <div>
                My Posts
                </div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div>
                New Posts
                <Post message='What is you name?' likeAmount='10'/>
                <Post message='How are you?' likeAmount='15'/>
                <Post message='Do you like cofee?' likeAmount='1'/>
                <Post message='This my firsts props?' likeAmount='100'/>
            </div>

        </div>
    )
}

export default MyPosts;