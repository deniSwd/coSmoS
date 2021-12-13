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
                <Post message='What is you name?'/>
                <Post message='How are you?'/>
                <Post message='Do you like cofee?'/>
                <Post message='This my firsts props?'/>
            </div>

        </div>
    )
}

export default MyPosts;