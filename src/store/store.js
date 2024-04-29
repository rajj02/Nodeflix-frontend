import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
const store = configureStore({
    reducer:{
      authslice : AuthSlice
    }
})

export {store}