import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"

const initialState = {}

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {},
})
export default adminSlice.reducer