import React, { useEffect, useState } from 'react';
import './App.css';
import { Button } from "./components/Button";
import { Input } from "./components/Input";

type TodosType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

function App() {
    const [todos, setTodos] = useState<TodosType[]>([])
    let [newTitle, setNewTitle] = useState('')

    const fetchFoo = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(() => {
        fetchFoo()
    }, [])

    const showButtonHandler = () => {
        fetchFoo()
    }

    const hideButtonHandler = () => {
        setTodos([])
    }

    const addNewItem = () => {
        const newItem = { userId: 1, id: todos.length + 1, title: newTitle, completed: false }
        setTodos([newItem, ...todos])
        setNewTitle('')
    }

    return (
        <div className="App">
            <button onClick={showButtonHandler}>show</button>
            <button onClick={hideButtonHandler}>hide</button>
            <div>
                <Input setNewTitle={setNewTitle} newTitle={newTitle} />
                <Button callBack={addNewItem} />
            </div>


            <ul>
                {todos.map((el) => {
                        return (
                            <li>
                                <span> {el.id} </span>
                                <span> {el.title} </span>
                                <input type={'checkbox'} checked={el.completed} />
                            </li>
                        )
                    }
                )}
            </ul>

        </div>
    );
}

export default App;
