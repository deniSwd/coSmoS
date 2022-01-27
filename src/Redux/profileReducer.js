const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialsState = {
    posts: [
        {id: 1, message: 'What is you name?', likeAmount: '10'},
        {id: 2, message: 'How are you?', likeAmount: '15'}
    ],
    newPostText: '',
    profile: null
};


const profileReducer = (state = initialsState, action) => {
    let newPost = {
        id: 3, message: state.newPostText, likeAmount: 0
    }
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return (state);
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export default profileReducer;
