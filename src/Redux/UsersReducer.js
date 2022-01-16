import userImg from "../assets/my images/userImg.JPG";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialsState = {
    users: [
        {
            id: 1,
            photoUser: userImg,
            followed: true,
            fullName: 'Denis K.',
            status: 'I am a junior...',
            location: {city: 'Belgorod', country: 'Russia'}
        },
        {
            id: 2,
            photoUser: userImg,
            followed: false,
            fullName: 'Denis K.',
            status: 'I am a junior...',
            location: {city: 'Belgorod', country: 'Russia'}
        },
        {
            id: 3,
            photoUser: userImg,
            followed: true,
            fullName: 'Denis K.',
            status: 'I am a junior...',
            location: {city: 'Belgorod', country: 'Russia'}
        }
    ]
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
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return (state);
    }
}
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export default usersReducer;
