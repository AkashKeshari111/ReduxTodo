import { DECREMENT, INCREMENT } from "./action.type"




export const CounterReducer=(state={count:0},{type,payload})=>{
       
    switch(type){
        case INCREMENT:{
            state.count++
            return {...state}
        }
        case DECREMENT:{
            state.count--
            return {...state}
        }
        default:{
            return state
        }
    }
}