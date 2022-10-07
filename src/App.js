
import './App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './Mycomponents/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToDoList } from './Mycomponents/ToDoList';
import { CompletedTodo } from './Mycomponents/completedTodo';
import { AddtoDo } from './Mycomponents/AddtoDo';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App =()=> {
  
  let init;
  if (localStorage.getItem("TodoList") === null) {
    init = []
  }
  else {
    init = JSON.parse(localStorage.getItem("TodoList"));
   
  }

  let initCompleted;
  if (localStorage.getItem("CompletedList") === null) {
    initCompleted = []
  }
  else {
    initCompleted = JSON.parse(localStorage.getItem("CompletedList"));
   
  }


  let completeId =0;
  let jobId = 0;
  const [TodoList, setTodolist] = useState(init);

  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(TodoList));
   
  }, [TodoList])

  const [CompletedList, setCompletedList] = useState(initCompleted);

  useEffect(() => {
    localStorage.setItem("CompletedList", JSON.stringify(CompletedList));
   
  }, [CompletedList])


  const addCompletedTodo = (title, desc) => {
   
    const job =
    {
      id: completeId++,
      title: title,
      description: desc
    };

    console.log(job);
    onDelete(job);

    setCompletedList([...CompletedList, job])
    localStorage.setItem("CompletedList", JSON.stringify(CompletedList));    
  }



  const addToDo = (title, desc) => {
    console.log("added", title, desc);
    const job =
    {
      id: jobId,
      title: title,
      description: desc
    };


    setTodolist([...TodoList, job])


    localStorage.setItem("TodoList", JSON.stringify(TodoList));
    let list = JSON.parse(localStorage.getItem("TodoList"));
    console.log(list);

    // localStorage.setItem("TodoList", JSON.stringify(TodoList));

  }
  
  const onDelete = (todo) => {
    console.log("Delete", todo);
    setTodolist(TodoList.filter((e) => {
      return e !== todo;
    }))
  }

  const compDelete = (todo) => {
    console.log("Delete", todo);      
    setCompletedList(CompletedList.filter((job) => {
   
      return job !== todo;
    }))
  }

 
    return (
      <>
        <Router>
          <NavBar title="My ToDo List"></NavBar>
          <Routes>
            <Route exact path="/" element={<AddtoDo addToDo={addToDo} />}>
            </Route>
            <Route exact path="/ToDoList" element={<ToDoList todo={TodoList}   onDelete={onDelete}   addCompletedTodo={addCompletedTodo}></ToDoList>}>
            </Route>
            <Route exact path="/completed" element={<CompletedTodo Comp = {CompletedList} compDel = {compDelete} ></CompletedTodo>}>
            </Route>
          </Routes>
        </Router>
      </>
    );
  }





  export default App;
