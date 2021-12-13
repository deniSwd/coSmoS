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
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>

        </div>
    )
}

export default MyPosts;