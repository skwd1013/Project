import React, { useState } from "react";


const List = React.memo((
  {
    id,
    title,
    completed,
    todoData,
    setTodoData,
    provided,
    snapshot
  }) => {

    const [isEditing,setIsEditing] = useState(false);
    const [EditedTitle,setEditTitle] = useState(title)
    const handleCompleChange = (id) => {
      const newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.completed = !data.completed;
        }
        return data;
      });
      setTodoData(newTodoData);
      localStorage.setItem('todoData',JSON.stringify(newTodoData) );
    };
    const handleEditChange = (event) => {
      setEditTitle(event.target.value);
    }
    const handleClick = (id) => {
      const newTodoData = todoData.filter((data) => data.id !== id);
      setTodoData(newTodoData);
      localStorage.setItem('todoData',JSON.stringify(newTodoData) );
    };
    const handleSubmit= (event) => {
      event.preventDefault();
      let newTodoData = todoData.map(data =>{
        if(data.id===id){
          data.title = EditedTitle
        }
        return data;
      })
      setTodoData(newTodoData)
      localStorage.setItem('todoData',JSON.stringify(newTodoData) );
      setIsEditing(false);
    }
    if(isEditing) {
      return (
        <div>
        <div
          className="flex items-center justify-between 
               w-full px-4 py-1 my-2 text-gray-600
                bg-gray-100 border ">
          <div className="items-center">
            <form onSubmit={handleSubmit}>
            <input
              value={EditedTitle}
              onChange={handleEditChange}
              className="w-full px-3 py-2 mr-4 text-gray-500"
            ></input>{" "}
            </form>
           
          </div>
          <div>
            <button
              className="px-4 py-2 float-right"
              onClick={() => setIsEditing(false)}
            >
              X
            </button>
            <button
              className="px-4 py-2 float-right"
              onClick={handleSubmit}
              type="submit"
            >
              save
            </button>
          </div>
        </div>
      </div>
      )
    }
    else{

    }
  return (
    <div
      key={id}
      {...provided.draggableProps}
      ref={provided.innerRef}
      {...provided.dragHandleProps}
    >
      <div
        className="flex items-center justify-between 
             w-full px-4 py-1 my-2 text-gray-600
              bg-gray-100 border "
      >
        <div className="items-center">
          <input
            type="checkbox"
            onChange={() => handleCompleChange(id)}
            defaultChecked={completed}
          ></input>{" "}
          <span className={completed ? "line-through" : undefined}>
            {title}
          </span>
        </div>
        <div>
          <button
            className="px-4 py-2 float-right"
            onClick={() => handleClick(id)}
          >
            X
          </button>
          <button
            className="px-4 py-2 float-right"
            onClick={() => setIsEditing(true)}
          >
            edit
          </button>
        </div>
      </div>
    </div>
  );
});

export default List;
