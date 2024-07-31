import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./authSlice"

const store = configureStore({
    reducer: {
        auth: authSlice,
        //todo add more slicer for todo
    }
        
})

export default store