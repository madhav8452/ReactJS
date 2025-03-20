import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
    name : 'Counter',
    initialState : {count : 0},
    reducers : {
        increase : (state, action)=>{
            state.count += 1
        },
        decrease : (state, action)=>{
            state.count -= 1
        }
    }
})

export const {increase, decrease} = counter.actions
export default counter.reducer
