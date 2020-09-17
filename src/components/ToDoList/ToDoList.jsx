import React from "react";
import ToDo from "../ToDo/ToDo";

function ToDoList({todos, toggleToDo}) {
    return (
        todos.map(todo => {
            return <ToDo key={todo.id} todo={todo} toggleToDo={toggleToDo}/>
        })
    );
}

export default ToDoList;