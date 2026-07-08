// Import useReducer.
// Purpose:
// useReducer is used for managing complex state logic.
import { useReducer } from "react";


// Create the reducer function.
//
// Purpose:
// Decide how the state should change.
//
// It always receives:
//
// 1. Current State.
// 2. Action.
//
// It must return the new state.
function reducer(state, action) {

    // Check which action was dispatched.
    switch (action.type) {

        // Increase the count.
        case "increment":

            // Return a new updated state.
            return {
                count: state.count + 1
            };

        // Decrease the count.
        case "decrement":

            return {
                count: state.count - 1
            };

        // Reset the count.
        case "reset":

            return {
                count: 0
            };

        // If no matching action exists,
        // return the current state.
        default:

            return state;
    }

}



// Create the component.
function Counter() {

    // Create state using useReducer.
    //
    // reducer
    // Controls how state changes.
    //
    // { count: 0 }
    // Initial state.
    //
    // state
    // Current state.
    //
    // dispatch
    // Sends actions to the reducer.
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (

        <div>

            {/* Display current count. */}
            <h2 className="text-dark">{state.count}</h2>

            {/* Dispatch increment action. */}
            <button
                onClick={() =>
                    dispatch({ type: "increment" })
                }
            >
                Increment
            </button>

            {/* Dispatch decrement action. */}
            <button
                onClick={() =>
                    dispatch({ type: "decrement" })
                }
            >
                Decrement
            </button>

            {/* Dispatch reset action. */}
            <button
                onClick={() =>
                    dispatch({ type: "reset" })
                }
            >
                Reset
            </button>

        </div>

    );

}

export default Counter;