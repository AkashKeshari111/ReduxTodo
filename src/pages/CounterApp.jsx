import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Decrement, Increment } from '../store/action'


function CounterApp() {


     const dispatch=useDispatch()
     const state=useSelector((state)=>state.counter.count)
  return (
    <div>
       <h1>counter:{state}</h1>

       <button onClick={()=>dispatch(Increment())}>+</button>
       <button onClick={()=>dispatch(Decrement())}>-</button>
    </div>
  )
}

export default CounterApp