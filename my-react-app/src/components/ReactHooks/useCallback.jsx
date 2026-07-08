// Import the useState Hook.
//
// Purpose:
// useState allows the component to store data
// that can change while the application is running.
//
// Import the useCallback Hook.
//
// Purpose:
// useCallback remembers (memoizes) a function.
// Instead of creating a new function on every render,
// React returns the previously created function
// as long as the dependencies have not changed.
import { useState, useCallback } from "react";



// Create a Functional Component.
//
// Purpose:
// React executes this function:
//
// 1. When the component loads.
// 2. Whenever state changes.
// 3. Whenever props change.
function App() {

    // Create a state variable.
    //
    // Purpose:
    // Store the current counter value.
    //
    // Initial Value
    //
    // count = 0
    //
    // React stores this state internally.
    //
    // count
    //
    // Current value.
    //
    // setCount()
    //
    // Updates the state.
    //
    // Calling setCount()
    // tells React:
    //
    // Store new state
    // ↓
    // Re render this component
    const [count, setCount] = useState(0);



    // Create a memoized function.
    //
    // Normally,
    // every time App() executes,
    // JavaScript creates a brand new function.
    //
    // Without useCallback:
    //
    // First Render
    //
    // handleClick → Function A
    //
    // Second Render
    //
    // handleClick → Function B
    //
    // Third Render
    //
    // handleClick → Function C
    //
    // Even though the code is identical,
    // JavaScript treats every function
    // as a completely new object in memory.
    //
    // That can cause unnecessary child
    // component re renders.
    //
    // useCallback tells React:
    //
    // "Remember this function.
    // Do not create another one
    // unless one of the dependencies changes."
    const handleClick = useCallback(

        // Callback Function.
        //
        // This function executes only when
        // the user clicks the "Click Me" button.
        () => {

            // Display a message in the console.
            //
            // This is just an example.
            // Normally this function might:
            //
            // Submit a form.
            // Call an API.
            // Open a modal.
            // Delete a user.
            console.log("Button Clicked");

        },

        // Dependency Array.
        //
        // Purpose:
        // Tell React when to create
        // a new version of handleClick.
        //
        // []
        //
        // Empty dependency array means:
        //
        // Create this function only once.
        //
        // Every future render
        // returns the exact same function.
        //
        // If this were:
        //
        // [count]
        //
        // React would recreate the function
        // every time count changes.
        []
    );



    // Return the UI.
    //
    // JSX describes what should appear
    // on the screen.
    return (

        // Container element.
        <div>

            {/*

                Display the current counter.

                Whenever count changes,

                React automatically updates
                this text.

            */}
            <h2>{count}</h2>



            {/*
                Increment Button.

                Purpose:
                Increase the counter.

                When clicked:

                setCount(count + 1)

                executes.

                React then:

                Stores new count

                ↓

                Executes App() again

                ↓

                Creates new JSX

                ↓

                Updates only the changed DOM
            */}
            <button

                onClick={() => setCount(count + 1)}

            >
                Increment
            </button>



            {/*
                Click Me Button.

                Purpose:
                Execute handleClick().

                Notice:

                onClick={handleClick}

                NOT

                onClick={handleClick()}

                Why?

                handleClick

                passes the function reference.

                React waits until
                the button is clicked.

                handleClick()

                executes immediately
                during rendering,
                which is incorrect.
            */}
            <button

                onClick={handleClick}

            >
                Click Me
            </button>

        </div>

    );

}



// Export the component.
//
// Purpose:
// Allow this component to be imported
// into another file.
export default App;