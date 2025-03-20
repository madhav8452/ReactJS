import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchApi = createAsyncThunk('fetchApi', async ()=>{
    let response = await axios.get(`https://fakestoreapi.com/products`)
    let data = response.data
    return data
})

export const deleteProduct = createAsyncThunk('deleteProduct', async (id)=>{
    await axios.delete(`https://fakestoreapi.com/products/${id}`)
    return id
})

export const updateProduct = createAsyncThunk('updateProduct', async (state)=>{
    let response = await axios.put(`https://fakestoreapi.com/products/${state.id}`, state)
    return response.data
})

export const apiSlice = createSlice({
    name : 'apiSlice',
    initialState : {data : [], loading : true},
    reducers : {},
    extraReducers : (builder=>{
        builder.addCase(fetchApi.pending, (state, action)=>{
            state.loading = true
        })
        builder.addCase(fetchApi.fulfilled, (state, action)=>{
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(deleteProduct.fulfilled, (state, action)=>{
            state.data = state.data.filter((item)=>item.id != action.payload)
        })
        builder.addCase(updateProduct.fulfilled, (state, action)=>{
            state.data = state.data.map((item)=>item.id == action.payload.id ? action.payload : item)
        })
    })
})

export default apiSlice.reducer