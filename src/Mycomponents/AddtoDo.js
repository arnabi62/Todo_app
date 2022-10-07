import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

export const AddtoDo = (props) => {


    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e)=>
    {
        e.preventDefault();
        if(title==="" | desc ==="")
        {
            alert("Title ot Description can not be blank");
        }
        else
        {
            props.addToDo(title, desc);
        }
        setTitle("");
        setDesc("")
    }
  return (
    <Container className='my3 d-flex justify-content-center' style={{margin: '2%'}}>
    <Form className='square border border-1 p-3' style={{width: '50%'}}  onSubmit={submit}>
      <Form.Group className="mb-3">
        <Form.Label>Add the Task </Form.Label>
        <Form.Control type="text" value= {title} placeholder="Enter task title" onChange={(e)=>{setTitle(e.target.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Control as="textarea" value={desc} placeholder="Enter task description"  onChange={(e)=>{setDesc(e.target.value)}}/>
      </Form.Group>

      
      <Button variant="outline-primary" type="submit" size="sm" >
        Submit
      </Button>
    </Form>
    </Container>
  )
}
