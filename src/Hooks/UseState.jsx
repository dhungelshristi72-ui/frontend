import React, { useState } from 'react'

//Hooks are spacial functions in the react that allow components to use react feature such as state management, run side effect, api calls , rendering component etc.
//mos commonly used Hooks:
//a. useState - state management , to store and update data.

//syntex
//const [state,setState] = useState(initialState)

//example : counter app
//count : 0 - initialState = 0

function UseState() {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1>Count : {count}</h1>

        <button onClick={() => setCount(count + 1)} > Increase</button>
    </div>
  )
}

export default UseState