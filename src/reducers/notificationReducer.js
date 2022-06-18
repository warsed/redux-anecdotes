import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notifications',
    initialState: null,
    reducers: {
        setMessage: (state, action) => {
            return action.payload
        },
        clearMessage: () => {
            return null
        }
    }
})

export const { setMessage, clearMessage } = notificationSlice.actions
export default notificationSlice.reducer