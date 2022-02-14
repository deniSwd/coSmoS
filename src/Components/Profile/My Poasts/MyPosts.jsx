import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {
    let postsElements = props.posts.map(
        p => <Post message={p.message} likeAmount={p.likeAmount}/>
    )

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div>
            <div className={style.postBlock}>
                <div>
                    <h2>My Posts</h2>
                </div>
               <MyPostFormRedux onSubmit ={onAddPost}/>
            </div>
            <div className={style.content}>
                New Posts
                {postsElements}
            </div>
        </div>
    )
}
const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component ={'textarea'} name={'newPostText'} placeholder={'Add Post'} />
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )

}
const MyPostFormRedux = reduxForm({form:'addPostForm'})(MyPostsForm)

export default MyPosts;