// Import the useState Hook.
//
// Purpose:
// The Custom Hook needs state management.
import { useState } from "react";


// Create a Custom Hook.
//
// Purpose:
// Store and manage a counter.
//
// Important:
// Every Custom Hook name must start with "use".
function useCounter() {

    // Create a state variable.
    //
    // Purpose:
    // Store the current count.
    const [count, setCount] = useState(0);


    // Create a reusable function.
    //
    // Purpose:
    // Increase the count.
    function increment() {

        // Update the state.
        setCount(prev => prev + 1);

    }

    function decrement() {
        setCount(prev => prev - 1);
    }


    // Return everything that components need.
    //
    // Any component using this Hook
    // will receive count and increment().
    return {


        count,
        increment,
        decrement,


    };

}


// Export the Custom Hook.
export default useCounter;