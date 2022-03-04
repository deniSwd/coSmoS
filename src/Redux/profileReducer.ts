import {profileAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET-USER-STATUS'
const SET_USER_PHOTO = 'SET-USER-PHOTO'

type PostsType = {
    id: number
    message: string
    likeAmount: number
}
type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos:  PhotosType,
    aboutMe: string
}
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type PhotosType = {
    small: string | null
    large: string | null
}
let initialsState = {
    posts: [
        {id: 1, message: 'What is you name?', likeAmount: 10},
        {id: 2, message: 'How are you?', likeAmount: 15}
    ] as Array<PostsType>,
    profile: null as ProfileType | null,
    status: ''
};

type ProfileInitialsStateType = typeof initialsState


const profileReducer = (state: ProfileInitialsStateType = initialsState, action: any): ProfileInitialsStateType => {
    let newPost = {
        id: 3, message: action.newPostText, likeAmount: 0
    }
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_USER_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return (state);
    }
}
type addPostActionType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPostActionCreator = (newPostText: string): addPostActionType => ({type: ADD_POST, newPostText});

type setUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): setUserProfileType => ({type: SET_USER_PROFILE, profile});

type setUserStatusType = {
    type: typeof SET_USER_STATUS
    status: string
}
export const setUserStatus = (status: string): setUserStatusType => ({type: SET_USER_STATUS, status});

type savePhotoSuccessType = {
    type: typeof SET_USER_PHOTO
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): savePhotoSuccessType => ({type: SET_USER_PHOTO, photos});


export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))

}: any
export const getUserStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response.data))
}
export const updateUserStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export const savePhoto = (file:any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error"
        dispatch(stopSubmit('edit-profile', {_error: message}))
        return Promise.reject(message)
    }
}
export default profileReducer;
