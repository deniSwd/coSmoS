import {userAPI} from "../API/api";
import {updateObjectInArray} from "../Components/Common/ObjectHelpers/updateObjectInArray";
import {PhotosType, UserType} from "../generalTypes";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOTAL_USERS_COUNT = 'TOTAL-USERS-COUNT';
const TOGGLE_IS_PROGRESS = 'TOGGLE-IS-PROGRESS';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';



let initialsState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isProgress: true,
    followingInProgress: [] as Array<number> // Array of users ids
};

type UsersInitialsStateType = typeof initialsState

const usersReducer = (state: UsersInitialsStateType = initialsState, action: any): UsersInitialsStateType => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_PROGRESS: {
            return {...state, isProgress: action.isProgress}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return (state);
    }
}
type FollowSuccessActionType = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType => ({type: FOLLOW, userId});

type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({type: UNFOLLOW, userId});

type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users});

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage});

type SetTotalUsersCountActionType = {
    type: typeof TOTAL_USERS_COUNT
    totalUsersCount: number
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({
    type: TOTAL_USERS_COUNT,
    totalUsersCount
});

type ToggleIsProgressActionType = {
    type: typeof TOGGLE_IS_PROGRESS
    isProgress: boolean
}
export const toggleIsProgress = (isProgress: boolean): ToggleIsProgressActionType => ({type: TOGGLE_IS_PROGRESS, isProgress});

type ToggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(toggleIsProgress(true))
    dispatch(setCurrentPage(currentPage))
    let data = await userAPI.requestUsers(currentPage, pageSize)
    dispatch(toggleIsProgress(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}

const followUnfollowToggle = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const unfollow = (userId: number) => async (dispatch: any) => {
    await followUnfollowToggle(dispatch, userId, userAPI.unfollow.bind(userAPI), unfollowSuccess)
}

export const follow = (userId: number) => async (dispatch: any) => {
    await followUnfollowToggle(dispatch, userId, userAPI.follow.bind(userAPI), followSuccess)
}

export default usersReducer;
