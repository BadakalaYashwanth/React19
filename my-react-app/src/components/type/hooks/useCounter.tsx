// Import useState.
//
// Purpose:
// Store the counter value.
import { useState } from "react";
// Create a Custom Hook.
//
// initialValue: number
//
// Purpose:
//
// The hook accepts only numbers.
//
// TypeScript will show an error
// if a string or boolean is passed.
function useCounter(initialValue: number) {
    // Store the counter.
    //
    // TypeScript automatically
    // infers count is a number.
    const [count, setCount] = useState(initialValue);
    // Increase the counter.
    function increment() {
        setCount(previous => previous + 1);
    }
    // Decrease the counter.
    function decrement() {
        setCount(previous => previous - 1);
    }
    // Return everything.
    //
    // TypeScript automatically
    // infers the return type.
    return {
        count,
        increment,
        decrement
    };
}
export default useCounter;