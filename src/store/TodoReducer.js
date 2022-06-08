import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, UPDATED_TODO } from "./action.type"



export const TodoReducer=(state={todos:[]},{type,payload})=>{

    switch(type){
        case ADD_TODO:{
         
            return {...state,
            todos:[
                ...state.todos,
                {
                    ...payload,
                    id: state.todos.length
                }
            ]
        }
        }
        case COMPLETE_TODO:{
            return {...state}
        }
        case UPDATED_TODO:{
            return {...state}
        }
        case DELETE_TODO:{
            return {...state}
        }
        default:{
            return state
        }
    }
}