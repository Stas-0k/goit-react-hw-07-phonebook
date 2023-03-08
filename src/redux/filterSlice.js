import { createSlice } from '@reduxjs/toolkit';




export const filterSlice = createSlice({
    name: 'filter',
    initialState: "",
    reducers: {
        changeFilter: {
            reducer(state, action) { 
                return state=action.payload
            }
        }
    }
})





export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions