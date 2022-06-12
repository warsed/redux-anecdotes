import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notifications',
    initialState: null,
    reducers: {
        addMessage: (state, action) => {
            return action.payload
        }
    }
})

export const { addMessage } = notificationSlice.actions
export default notificationSlice.reducer