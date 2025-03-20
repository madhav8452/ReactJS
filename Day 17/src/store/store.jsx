import { configureStore } from "@reduxjs/toolkit";
import counter from "../action-creator/reducers";

const store = configureStore({
    reducer : {
        configureStore : counter
    }
})   

export default store