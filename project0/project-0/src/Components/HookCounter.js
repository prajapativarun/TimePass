import React, {Component, useState} from 'react'

function HookCounter() {

    const [ count, setCount ] = useState(0)

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  ) 
}

export default HookCounter

// Rules of Hooks
/*"Only call Hooks at the Top level"
Don't call Hooks inside loops, conditions, or nested functions
"Only call Hooks from React Functions"
Call them from within React functional Components and not just any regular JavaScript function.*/