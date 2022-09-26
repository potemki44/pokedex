import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter.Slice"

export default configureStore({
    reducer: {
        counterSlice
    }
})