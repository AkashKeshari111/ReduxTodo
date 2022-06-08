import React from 'react'
import { useRef } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { TodoAdd } from '../store/action'


function TodoApp() {

    const dispatch=useDispatch()
    const todos=useSelector((state)=>state.todo.todos)
    const ref=useRef()

    const newTodo=()=>{
         let value=ref.current.value
         console.log(value)

         dispatch(TodoAdd({
             value:value,
             isCompleted:false
         }))

         ref.current.value=null
    }

  return (
    <div>

        <input ref={ref} type="text"/>
        <button onClick={newTodo}>Add</button>


        {todos.map((el)=>{
         return   <div key={el.id}>{el.value}</div>
        })}

    </div>
  )
}

export default TodoApp