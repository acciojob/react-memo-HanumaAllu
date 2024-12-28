import React, { useState } from 'react'

const ReactmemoTodo = () => {

    const [todo, setTodo] = useState([])

    const AddTodo = (e) => {
        e.preventDefault()
        setTodo((prevTodos) => [prevTodos, "New Todo"])
    }

    return (
        <div>
            <h1>React.useMemo</h1>
            <h2>My todos</h2>
            <ul>
                {todo.map((todos, index) => (
                    <li key={index}>{todos}</li>
                ))}
            </ul>
            <button onClick={AddTodo}>Add Todo</button>
        </div>
    )
}

export default ReactmemoTodo
