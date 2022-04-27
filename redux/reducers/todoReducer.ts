import { createSlice } from "@reduxjs/toolkit"

export interface TodoType{
   
    task: string;  
   
}
export interface TodoState{
    loading: boolean
    data: TodoType[]
    error: any
}

const initialState: TodoState = {
    loading: false,
    data: [],
    error: null,
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodoRequest : (state: TodoState, payload) =>{
            alert('2:리듀서 내부')
            state.loading = true;
        },
        addTodoSuccess (state: TodoState, {payload}){
            state.data = [...state.data, payload]
            state.loading = false;
        },
        addTodoFailure (state: TodoState, {payload}){
            state.data = payload;
            state.loading
        },
        getTodosRequest (state: TodoState, payload) {
            state.loading = true;
        },
        getTodosSuccess (state: TodoState, {payload}){
            state.data = [...state.data, payload]
            state.loading = false;
        },
        getTodosFailure (state: TodoState, {payload}){
            state.data = payload;
            state.loading
        },
        modifyTodoRequest (state: TodoState, payload) {
            state.loading = true;
        },
        modifyTodoSuccess (state: TodoState, {payload}){
            state.data = [...state.data, payload]
            state.loading = false;
        },
        modifyTodoFailure (state: TodoState, {payload}){
            state.data = payload;
            state.loading
        },
        removeTodoRequest (state: TodoState, payload) {
            state.loading = true;
        },
        removeTodoSuccess (state: TodoState, {payload}){
            state.data = [...state.data, payload]
            state.loading = false;
        },
        removeTodoFailure (state: TodoState, {payload}){
            state.data = payload;
            state.loading
        }
    }
})
const {reducer, actions} = todoSlice
export const todoActions = actions
export default reducer