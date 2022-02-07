import {userAPI} from "../API/api";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOTAL_USERS_COUNT = 'TOTAL-USERS-COUNT';
const TOGGLE_IS_PROGRESS = 'TOGGLE-IS-PROGRESS';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let initialsState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isProgress: true,
    followingInProgress: []
};


const usersReducer = (state = initialsState, action) => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
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
            return {...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter (id => id !== action.userId)}
        }
        default:
            return (state);
    }
}
export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsProgress = (isProgress) => ({type: TOGGLE_IS_PROGRESS, isProgress});
export const toggleFollowingProgress = (isFetching,userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching,userId});

export const getUsers = (currentPage,pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsProgress(true))
        dispatch(setCurrentPage(currentPage))
        userAPI.getUsers(currentPage,pageSize).then(data => {
            dispatch(toggleIsProgress(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true,userId))
        userAPI.unfollow(userId).then(response => {
            if (response.data.resultCode == 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false,userId))
        })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true,userId))
        userAPI.follow(userId).then(response => {
            if (response.data.resultCode == 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false,userId))
        })
    }
}

export default usersReducer;
