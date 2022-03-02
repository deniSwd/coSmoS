import {getMyAuth} from "./authReducer";


const SET_INITIAL_APP = 'SET-INITIAL-APP'

let initialsState = {
    initialize: false as boolean
}
export type AppInitialStateType = typeof initialsState

const appReducer = (state: AppInitialStateType = initialsState, action): AppInitialStateType => {

    switch (action.type) {
        case SET_INITIAL_APP:
            return {
                ...state,
                initialize: true
            }
        default:
            return (state);
    }

}


export const setInitialApp = () => ({type: SET_INITIAL_APP});

export const initializedApp = () => {
    return async (dispatch) => {
        await dispatch(getMyAuth())
        dispatch(setInitialApp())
    }
}


export default appReducer;
