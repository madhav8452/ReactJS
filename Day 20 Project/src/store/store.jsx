import { configureStore } from "@reduxjs/toolkit";
import apiData from "../action-creator/reducers";

const store = configureStore({
    reducer : {
        fetchApi : apiData
    }
})

export default store