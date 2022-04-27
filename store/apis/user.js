import {HYDRATE} from "next-redux-wrapper"
import * as T from "@/store/types"

const initialState = {
    users: [],
    user: {
        isLogginIn: true,
        data: null
    }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            console.log(
                " ### Error: Hydration failed because the initial UI does not match what was re" +
                "ndered on the server. ### "
            )
            return {
                ...state,
                ...action.payload
            }
        case T.USER_ADD_SUCCESS:
            return {
                ...state,
                users: [
                    action.payload, ...state.users
                ]
            }
        
        case T.LOGIN_SUCCESS:
            return {
                ...state,
                loginLoading: false,
                loginSuccess: true,
                loginError: null,
                user: action.data
            }
        case T.LOGIN_FAIL:
            return {
                ...state,
                loginLoading: false,
                loginSuccess: false,
                loginError: action.error
            }
        default:
            return state;
    }
}
export default userReducer