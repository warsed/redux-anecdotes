import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        addValue: (state, action) => {
            return action.payload
        }
    }
})

export const { addValue } = filterSlice.actions
export default filterSlice.reducer