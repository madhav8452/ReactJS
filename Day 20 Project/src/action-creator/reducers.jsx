import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addApi = createAsyncThunk('addApi', async (state)=>{
    let response = await axios.post(`http://localhost:3000/product`, state);
    return response.data
})

export const fetchApiData = createAsyncThunk('fetchApiData', async ()=>{
    let response = await axios.get(`http://localhost:3000/product`);
    return response.data
})

export const deleteData = createAsyncThunk('deleteData', async (id)=>{
    await axios.delete(`http://localhost:3000/product/${id}`)
    return id
})

export const updateData = createAsyncThunk('updateData', async (state)=>{
    let response = await axios.put(`http://localhost:3000/product/${state.id}`, state)
    return response.data
})

export const apiData = createSlice({
    name : 'apiData',
    initialState : {data : []},
    reducers : {},
    extraReducers : (builder=>{
        builder.addCase(addApi.fulfilled, (state, action)=>{
            state.data.push(action.payload)
        })
        builder.addCase(fetchApiData.fulfilled, (state, action)=>{
            state.data = action.payload
        })
        builder.addCase(deleteData.fulfilled, (state, action)=>{
            state.data = state.data.filter((item)=>item.id != action.payload)
        })
        builder.addCase(updateData.fulfilled, (state, action)=>{
            state.data = state.data.map((item)=>item.id == action.payload.id ? action.payload : item)
        })
    })
})

export default apiData.reducer