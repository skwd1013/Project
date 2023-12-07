import React, { useState } from "react";
import "./App.css";
import "./index.css";
import List from "./components/Lists";
import Form from "./components/Form";

const initialTodoData= localStorage.getItem("todoData") ? JSON.parse(localStorage.getItem("todoData")) :[];
const App = () => {
  const [todoData, setTodoData] = useState(initialTodoData);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    setTodoData((prev) => [...prev, newTodo]);
    localStorage.setItem('todoData',JSON.stringify([...todoData, newTodo]) );
    setValue("");
  };
<link href="/dist/output.css" rel="stylesheet"/>

const handleRemoveClick =() => {
  setTodoData([]);
  localStorage.setItem('todoData',JSON.stringify([]) );
}
  return (

    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
        
          <h1>Todo List</h1>
          <button onClick={handleRemoveClick}>Delete ALL</button>
        </div>
      
        <List todoData={todoData} setTodoData={setTodoData}></List>
        <Form handleSubmit={handleSubmit}value={value} setValue={setValue}></Form>
       
      </div>
    </div>
  );
};

export default App;