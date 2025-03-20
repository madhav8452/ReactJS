import { createSlice } from "@reduxjs/toolkit";

const crud = createSlice({
    name : 'crud',
    initialState : {student : []},
    reducers : {
        addData : (state, action)=>{
            state.student.push(action.payload)
        },
        deleteData : (state, action)=>{
            let Data = state.student.filter((e)=>e.id != action.payload)
            state.student = Data
        },
        updataData : (state, action)=>{
            state.student.map((e)=>{
                if(e.id == action.payload.editIndex){
                    e.email = action.payload.email
                    e.password = action.payload.password
                }
                else{
                    e
                }
            })
        }
    }
})

export const {addData, deleteData, updataData} = crud.actions
export default crud.reducer