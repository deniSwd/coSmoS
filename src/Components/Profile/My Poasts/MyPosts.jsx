import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div className={style.postBlock}>
                <div>
                    <h2>My Posts</h2>
                </div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={style.content}>
                New Posts
                <Post message='What is you name?' likeAmount='10'/>
                <Post message='How are you?' likeAmount='15'/>
                {/*<Post message='Do you like cofee?' likeAmount='1'/>*/}
               {/* <Post message='This my firsts props?' likeAmount='100'/>*/}
            </div>

        </div>
    )
}

export default MyPosts;