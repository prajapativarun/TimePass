// No longer need of Class Component
// You must import Hooks from react
// Hooks can be only called in function component
// Hooks can't be conditional
// Hooks can be only call in top level of a component
import React, { useState } from 'react';

function FavCol() {
    const [color, setColor] = useState("red");

    return(
        <>
        <h1>My Fav color is {color}!</h1>
        <button
        type='button'
        onClick={() => setColor("blue")}>
            Blue
        </button>
        <button
        type='button'
        onClick={() => setColor("green")}>
            green
        </button>
        <button
        type='button'
        onClick={() => setColor("red")}>
            red
        </button>
        <button
        type='button'
        onClick={() => setColor("black")}>
            Black
        </button>
        </>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
React.render(<FavCol />);

export default Onew;