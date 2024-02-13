import { createSlice } from '@reduxjs/toolkit';

const initialState = [];


export const todoSlice = createSlice({
    name: 'todos',
    initialState : initialState,
    reducers: {
        Add : (state, action) => {     
            if ((action.payload.todo === null) || (action.payload.todo === "")) {
                return
            }
            state.push(action.payload);
        },
        Complete : (state, action) => {
            state = state.map((todo) => {
              
                if(todo.id === action.payload.id){
                  if(todo.status){
                    todo.status = false;
                  }else
                    todo.status = true;
                }
                return todo
            })
        }
    }
})

export const { Add, Complete } = todoSlice.actions;
export default todoSlice.reducer;