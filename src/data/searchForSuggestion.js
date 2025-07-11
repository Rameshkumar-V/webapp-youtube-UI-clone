import { createSlice } from "@reduxjs/toolkit";


/*
"keywords":["suggestion 1","suggestion 2","suggestion n"]
*/


export const searchForSuggestionSlice = createSlice({
    name: 'searchForSuggestion',
    initialState : {
    },
    reducers:{
        addSuggestion:(state,actions)  => { 
            state = Object.assign(state,actions.payload)

         }
    }
});


export const { addSuggestion } = searchForSuggestionSlice.actions;
export default searchForSuggestionSlice.reducer;