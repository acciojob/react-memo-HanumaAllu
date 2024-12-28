import React, { useState, useMemo } from 'react';
import ReactmemoTodo from './reactmemoTodo';
import MemoCounter from './memoCounter';
import MemoList from './memoList';

const App = () => {
    const [counter, setCounter] = useState(0);

    // UseMemo Example: Expensive calculation based on counter
    const expensiveCalculation = useMemo(() => {
        console.log("Performing expensive calculation...");
        return counter * 2;
    }, [counter]);

    return (
        <div>
            <h1>Task Management App</h1>
            <MemoCounter />
            <ReactmemoTodo />
            <MemoList />
            <div>
                <h2>Expensive Calculation</h2>
                <p>Result: {expensiveCalculation}</p>
                <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
            </div>
        </div>
    );
};

export default App;
