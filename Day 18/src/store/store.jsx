import { configureStore } from "@reduxjs/toolkit";
import crud from "../Action-creator/reducer";

const store = configureStore({
    reducer : {
        configureStore : crud
    }
})

export default store