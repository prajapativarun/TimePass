// REACT useEffect
// The useEffect Hook allows you to perform side effects in your components.
// Some examples of side effects are: fetching data, directly updating the DOM, and timers.
// useEffect accepts two arguments. The second argument is optional.
// useEffect(<function>, <dependency>)


/* import {useState, useEffect} form "react"

function  Timer() {
    const [sec, setSec] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setSec((sec) => sec + 1);
        }, 1000);
    }); //Or  }, []);  <- add empty brackets here

    return <h1>I have Rendered {sec} times!</h1>;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);*/



/* RULES

1. No dependency passed:
useEffect(() => {
  //Runs on every render
});


2. An empty array:
useEffect(() => {
  //Runs only on the first render
}, []);


3. Props or state values:
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]); */



/* useEffect Hook that is dependent on a variable. If the count variable updates, the effect will run again

import {useState, useEffect} from 'react';

function Item() {
    const [num, setNum] = useState(0);
    const [calc, setCalc] = useState(0);

    useEffect(() => {
        setCalc(() => num * 2);
    },[num]); // <- add the num variable here

    return (
        <>
        <p>Count: {num}</p>
        <button onClick={() => setNum((c) => c + 1)}>+</button>
        <p>Calculation: {calc}</p>
        </>
    );
}*/


/* Effect CleanUp 
// Some effects require cleanup to reduce memory leaks.
// Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.

import {useState, useEffect} from 'react';

function Timer() {
  const [click, setClick] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setColor((click) => click + 1);
    }, 1000);

    return () =>clearTimeout(timer)
  }, []);

  return <h1>I've Rendered {click} times!</h1>
}*/
