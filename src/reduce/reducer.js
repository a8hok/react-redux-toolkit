import { createSlice } from "@reduxjs/toolkit";

const Todo = createSlice({
   name: 'Todo',
   initialState: { todo: [{item: 'read books'}]},
   reducers: {
    addTodo: (state, action) => {
        state.todo.push(action.payload)
    }
    // delteTodo: (state) => state.todo.filter((obj)=>state.todo)
   } 
});

export const {addTodo} = Todo.actions;
export default Todo.reducer;