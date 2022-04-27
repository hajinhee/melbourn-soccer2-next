import {createSlice} from '@reduxjs/toolkit'

const initialState = [] 
export const boardSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
        addTitle: (state, action)=> {
            alert('리듀셔 내부로 들어온 글 제목은? ' +action.payload.title)
            const board = {id: new Date(), title: action.payload.title, compelted: false}
            state.push(board)
        }

    }
})
export const {addTitle} = boardSlice.actions
export default boardSlice.reducer