import React from 'react'
import { ToDo } from './ToDo'
import Container from 'react-bootstrap/Container';
export const ToDoList = (props) => {
  let todos = localStorage.getItem("TodoList") || [];
 console.log(todos);

  return (
   
  <>
  <Container >
    <h1 className='text-center my-3 mb'>Task Todo</h1>
  
    {props.todo.length === 0  ?<div className='text-center'>Nothing to display</div>: props.todo.map((todo)=>{
    return <ToDo todo ={todo}  onDelete = {props.onDelete}   addCompletedTodo={props.addCompletedTodo}></ToDo>})}
   
    </Container>
    
  </>
    
  )
}
