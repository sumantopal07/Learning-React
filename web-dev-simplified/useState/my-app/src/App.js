import React, { useState } from 'react';
/**
 * Hooks rules 
 * 1. hooks can be only used inside functional components
 * 2. Every time the function(component) runs 
 * the hooks must execute in the same order.
 * Thus hooks cannot be inside a function block
 */
function countInitial(){
    console.log("run");
    return 4;
}
function App() {
    /***
     *  BAD 
     *  const [count, setCount] = useState(countInitial());
     */

    /** GOOD
     * function version, it only runs once 
     * independent of number of times it re-renders
     */
     const [count, setCount] = useState(()=>countInitial());
    function decrementCounter(){
        /**
         * Always prefer function version
         */
        setCount(prev => prev-1);
    }

    return (
        <>
            <button onClick={decrementCounter}>-</button>
            <span>{count}</span>
            <button>+</button>
        </>
    );
}

export default App;
