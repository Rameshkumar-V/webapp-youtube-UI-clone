import { createSlice } from "@reduxjs/toolkit";




export const headerSlice = createSlice({
    name: 'header',
    initialState : {
        isShow : true
    },
    reducers:{
        toggleHeaderShow:(state)  => { state.isShow=!state.isShow; }
    }
});


export const {toggleHeaderShow} = headerSlice.actions;
export default headerSlice.reducer;