import React, { useState } from 'react'

const MemoCounter = () => {

    const [count, setCount] = useState(0)

    const Increment = (e) => {
        setCount(count + 1)
    }
    return (
        <div>
            <span>Count:{count}</span>
            <button onClick={Increment}>+</button>
        </div >
    )
}

export default MemoCounter
