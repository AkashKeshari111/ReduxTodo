import { ADD_TODO, COMPLETE_TODO, DECREMENT, DELETE_TODO, INCREMENT, UPDATED_TODO } from "./action.type";

// for counterApp
export const Increment=()=>({type:INCREMENT})
export const Decrement=()=>({type:DECREMENT})



//for todoApp
export const TodoAdd=(payload)=>({type: ADD_TODO ,payload})
export const TodoComplete=(id)=>({type: COMPLETE_TODO ,payload:id})
export const TodoUpdated=(payload)=>({type: UPDATED_TODO ,payload})
export const TodoDelete=(id)=>({type: DELETE_TODO ,payload:id})