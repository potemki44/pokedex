import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({ 
    name: "name",
    initialState: "",
    reducers: {
        setCounterSlice: (state,action) => action.payload

    }
})


export const {setCounterSlice} = counterSlice.actions
export default counterSlice.reducer