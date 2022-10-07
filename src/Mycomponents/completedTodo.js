import React from 'react'
import { ToDo } from './ToDo';

export const CompletedTodo = (props) => {

  
  return (
   <>
     <h1 className='text-center my-3 mb'>Completed Task</h1>
  
     {props.Comp.length === 0  ?<div className='text-center'>Nothing to display</div>: props.Comp.map((todo)=>{
    return <ToDo todo ={todo}  mark = "Completed" compDel = {props.compDel}></ToDo>})}
   </>
  )
}
