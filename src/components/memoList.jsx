import React, { useState } from 'react';

const MemoList = () => {
    const [input, setInput] = useState(""); // Stores input value
    const [items, setItems] = useState([]); // Stores task list
    const [error, setError] = useState(""); // Stores validation error message

    const AddInput = (e) => {
        setInput(e.target.value);
        if (e.target.value.trim().length > 5) {
            setError(""); // Clear error if valid
        }
    };

    const AddInputsToList = (e) => {
        e.preventDefault();
        if (input.trim().length > 5) {
            setItems((prevItems) => [...prevItems, input.trim()]);
            setInput(""); // Clear input field
        } else {
            setError("Input must be more than 5 characters");
        }
    };

    return (
        <div>
            <h1>React.memo</h1>
            <input
                type="text"
                onChange={AddInput}
                name="name"
                value={input}
                placeholder="Enter a custom task"
            />
            <button onClick={AddInputsToList}>Add Skill</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default MemoList;
