// Import useState from React.
//
// Purpose:
//
// useState allows this Custom Hook
// to store and update state.
//
// Whenever the state changes,
// React automatically re-renders
// the component using this Hook.
import { useState } from "react";



// Create a Custom Hook.
//
// Purpose:
//
// A Custom Hook is used to
// reuse stateful logic.
//
// Any component can import
// this Hook instead of writing
// the same counter logic again.
//
// initialValue: number
//
// Purpose:
//
// The initial counter value.
//
// TypeScript ensures only
// a number can be passed.
function useCounter(initialValue: number) {

    // Create a state variable.
    //
    // count
    //
    // Stores the current counter value.
    //
    // setCount
    //
    // Updates the counter value.
    //
    // Initial value comes from
    // the parameter passed
    // to the Custom Hook.
    const [count, setCount] = useState(initialValue);



    // Create the increment function.
    //
    // Purpose:
    //
    // Increase the counter by 1.
    //
    // previous
    //
    // React provides the latest
    // state value.
    //
    // Using previous avoids
    // stale state problems.
    function increment() {

        setCount(previous => previous + 1);

    }



    // Create the decrement function.
    //
    // Purpose:
    //
    // Decrease the counter by 1.
    //
    // Again,
    // React provides the latest
    // value through previous.
    function decrement() {

        setCount(previous => previous - 1);

    }



    // Return an object.
    //
    // Purpose:
    //
    // Make the counter value
    // and both functions
    // available to any component
    // using this Custom Hook.
    //
    // Example:
    //
    // const {
    //     count,
    //     increment,
    //     decrement
    // } = useCounter(0);
    return {

        count,

        increment,

        decrement

    };

}



// Export the Custom Hook.
//
// Purpose:
//
// Allows other components
// to import and reuse it.
export default useCounter;