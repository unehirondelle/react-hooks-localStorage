import React from "react";

export default function ToDo({todo, toggleToDo}) {
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleToDoChecked}/>
                {todo.name}
            </label>

        </div>
    )

    function handleToDoChecked() {
        toggleToDo(todo.id);
    }
}