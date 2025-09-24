import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reduxSlices/userSlice';
import moviesReducer from "./reduxSlices/moviesSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
    }
})

export default appStore;