import React, {useState, useRef, useEffect} from 'react';
import ToDoList from "./components/ToDoList/ToDoList";
//creates a random id
import uuidv4 from "uuid/dist/v4";

const localStorageKey = "myToDoList;"

function App() {
    const [todos, setTodos] = useState([]);
    const todoNameRef = useRef();

    //store todos in a local storage
    //an empty array never changes so the function will be called only once
    // and todos won't be lost after page refresh
    useEffect(() => {
        const storedToDos = JSON.parse(localStorage.getItem(localStorageKey));
        if (storedToDos) setTodos(storedToDos);
    }, []);

    //get todos from localstorage
    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(todos));
    }, [todos]);

    return (
        <>
            <ToDoList todos={todos} toggleToDo={toggleToDo}/>
            <input ref={todoNameRef} type="text"/>
            <button onClick={handleAddTodo}>Add</button>
            <button>Clear</button>
            <div>0 left to do</div>
        </>
    )

    function handleAddTodo(e) {
        const name = todoNameRef.current.value;
        if (!name) return;
        console.log(name);
        setTodos(prevTodos => {
            return [...prevTodos, {id: uuidv4(), name: name, complete: false}];
        })
        todoNameRef.current.value = null;
    }

    function toggleToDo(id) {
        //create the copy of the state
        const updatedToDos = [...todos];
        const todo = updatedToDos.find(todo => todo.id === id);
        todo.complete = !todo.complete;
        setTodos(updatedToDos);
    }
}

export default App;
