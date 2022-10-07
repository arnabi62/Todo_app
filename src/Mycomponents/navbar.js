import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar(props)
{
    return (
      <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">{props.title}</Navbar.Brand>
          <Nav className="me-auto">
         
          
            <Nav.Link href="/">Add Task</Nav.Link>
            <Nav.Link href="/ToDoList">Your Tasks</Nav.Link>
            <Nav.Link href="/completed">Completed task</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      </>
    );
}


export default NavBar;