import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   sortType: 'none',
}

const filterSlice = createSlice({
    name: 'sort', 
    initialState,
    reducers:{
        setSort: (state, action) => {
            state.sortType = action.payload
        }
    }
})

export const {setSort} = filterSlice.actions
export default filterSlice.reducer