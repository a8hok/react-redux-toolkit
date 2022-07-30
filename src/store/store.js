import { configureStore } from "@reduxjs/toolkit";

import Todo from '../reduce/reducer'

export const store = configureStore({
    reducer: {
        Todo: Todo
    }
})