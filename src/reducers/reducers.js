import { configureStore } from "@reduxjs/toolkit"
import anecdoteReducer from './anecdoteReducer'
import notificationReducer from "./notificationReducer"

export const store = configureStore({
    reducer: {
        anecdotes: anecdoteReducer,
        notifications: notificationReducer
    }
})