import { createSlice } from "@reduxjs/toolkit"

export interface UserType{
    userid: string;
    password: string;  
    email: string;
    name: string;  
    phone: string;
    birth: string;
    address: string;
}

export interface UserState{
    loading: boolean;
    data: UserType[];
    error: any;
}


const initialState: UserState = {
    loading: false,
    data: [],
    error: null
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        joinRequest(state: UserState, payload) {
            alert(' 2 : 리듀서 진입')
            state.loading = true; 
        },
        joinSuccess(state: UserState, {payload}){ 
            state.data = [...state.data, payload]
            state.loading = false;
            
        },
        joinFailure(state: UserState, {payload}){ 
            state.data = payload;
            state.loading = false;
        },
        loginRequest(state: UserState, payload) {
            state.loading = true; 
        },
        loginSuccess(state: UserState, {payload}){ 
            state.data = [...state.data, payload]
            state.loading = false;
            
        },
        loginFailure(state: UserState, {payload}){ 
            state.data = payload;
            state.loading = false;
        },
        logoutRequest(state: UserState, payload) {
            state.loading = false; 
        },
        logoutSuccess(state: UserState) {
            state.loading = false; 
            localStorage.clear()
            window.location.href = '/'
        },
        delUserRequest(state: UserState, payload) {
            state.loading = true; 
        },
        delUserSuccess(state: UserState, {payload}){ 
            state.data = [...state.data, payload]
            state.loading = false;
            
        },
        delUserFailure(state: UserState, {payload}){ 
            state.data = payload;
            state.loading = false;
        }
    }
})
const { reducer, actions } = userSlice
export const userActions = actions
export default reducer