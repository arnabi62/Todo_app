
import React from 'react'

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
export const ToDo = (props) => {
 
  console.log(props.todo);
  return (
    
    <Container className='d-flex justify-content-center'>
      <Card bg="light" className='my-3' style={{width: '70%'}} >
        
        <Card.Header>
        <h1>{props.todo.title}</h1>
        </Card.Header>
        <Card.Body>
        <h2>{props.todo.description}</h2>
        <hr/>
        
        {!props.mark?
       
        <div className="d-flex justify-content-between">
        <button className='btn btn-sm btn-danger' onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
        <button className='btn btn-sm btn-outline-success' onClick={()=>{ props.addCompletedTodo(props.todo.title, props.todo.description); props.onDelete(props.todo)}}>Mark Completed</button>
        </div>
        : <button className='btn btn-sm btn-danger' onClick={()=>{props.compDel(props.todo)}}>Delete permanently</button>
        }
        
        </Card.Body>
        
        </Card> 
        </Container> 
        
  )
}
