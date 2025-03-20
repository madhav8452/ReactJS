import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../action-creator/reducer";

const store = configureStore({
    reducer : {
        configurestore : apiSlice
    }
})

export default store