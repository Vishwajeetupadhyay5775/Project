import React, { useState } from 'react'

function ExampleOne() {
    let init = 0;
    const [count, setCount] = useState(init)
    const superLike = () => {
        for (let i = 1; i <= 10; i++) {
            setCount((prevCount) => prevCount + 1);
        }
    }

    return (
        <div className='counter'>
            <h1>Counter⏱️{count}</h1>
            <button onClick={() => setCount(count + 1)}>like</button>
            <button onClick={superLike}>super like</button>
            {/* <button onClick={() => superLike(100)}>super like</button> */}
            <button onClick={() => setCount(count - 1)}>unlike</button>
            <button onClick={() => setCount(init)}>reset</button>





        </div>
    )
}

export default ExampleOne