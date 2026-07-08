// Import the useEffect Hook.
//
// Purpose:
// useEffect is used to perform side effects.
//
// A side effect is any operation that happens outside
// React's normal rendering process.
//
// Examples:
// API calls
// Timers
// Event Listeners
// Local Storage
// WebSocket connections
//
// Import the useState Hook.
//
// Purpose:
// useState allows this component to remember values
// between renders.
//
// Here it stores the user's name.
import { useEffect, useState } from "react";



// Create a Functional Component.
//
// Purpose:
// A React component is simply a JavaScript function
// that returns JSX.
//
// React executes this function:
//
// 1. When the component first appears.
// 2. Whenever its state changes.
// 3. Whenever its props change.
function UserProfile() {

    // Create a state variable.
    //
    // Purpose:
    // Store the user's name.
    //
    // useState("")
    //
    // "" is the initial state.
    // During the first render,
    // React stores an empty string in its internal memory.
    //
    // React internally remembers:
    //
    // name = ""
    //
    // name
    // Holds the current value.
    //
    // setName
    // Updates the state.
    //
    // Never write:
    //
    // name = "Yaswanth";
    //
    // React will not detect that change.
    //
    // Always use:
    //
    // setName(...)
    //
    // because React only tracks updates made
    // through the setter function.
    const [name, setName] = useState("");



    // Execute a side effect.
    //
    // Purpose:
    // Perform work AFTER React finishes rendering.
    //
    // React first:
    //
    // Render Component
    // ↓
    // Create Virtual DOM
    // ↓
    // Update Real DOM
    // ↓
    // Display UI
    // ↓
    // Execute useEffect()
    //
    // Notice:
    //
    // useEffect NEVER runs before rendering.
    // It always runs AFTER rendering.
    useEffect(() => {

        // This line runs after the component
        // has been rendered.
        //
        // Purpose:
        // Simulate fetching data from a server.
        console.log("Fetching user data...");



        // Create a timer.
        //
        // Purpose:
        // Simulate an API request that takes time.
        //
        // Normally an API might take 2 seconds
        // before returning data.
        //
        // setTimeout waits 2000 milliseconds
        // before executing its callback.
        //
        // The timer ID is stored inside "timer"
        // so that it can be cancelled later.
        const timer = setTimeout(() => {

            // Update the state.
            //
            // Purpose:
            // Store the received user name.
            //
            // React internally does:
            //
            // Step 1
            // Store:
            //
            // name = "Yaswanth"
            //
            // Step 2
            // Schedule another render.
            //
            // Step 3
            // Execute UserProfile() again.
            //
            // Step 4
            // Create a new Virtual DOM.
            //
            // Step 5
            // Compare it with the previous Virtual DOM.
            //
            // Step 6
            // Update only the changed text.
            //
            // The screen changes from:
            //
            // ""
            //
            // to
            //
            // Yaswanth
            setName("Yaswanth");

        }, 2000);



        // Cleanup Function.
        //
        // Purpose:
        // React automatically executes this function
        // before removing this component
        // or before running this effect again.
        //
        // Why is cleanup important?
        //
        // Suppose the component disappears
        // before the 2 seconds finish.
        //
        // Without cleanup,
        // the timer would still continue running.
        //
        // That wastes memory
        // and may try updating a component
        // that no longer exists.
        //
        // clearTimeout(timer)
        //
        // Stops the timer completely.
        return () => {

            clearTimeout(timer);

        };

    },

        // Dependency Array.
        //
        // Purpose:
        // Tell React WHEN this effect should run.
        //
        // []
        //
        // Empty Dependency Array means:
        //
        // Run ONLY once.
        //
        // React executes this effect:
        //
        // First Render
        // ✓ Runs
        //
        // Second Render
        // ✗ Does NOT run
        //
        // Third Render
        // ✗ Does NOT run
        //
        // This behaves similarly to
        // componentDidMount()
        // in Class Components.
        []);




    // Return JSX.
    //
    // Purpose:
    // Describe what should appear on the screen.
    //
    // JSX is converted into React Elements.
    // React then uses those elements
    // to update the DOM.
    return (

        // div groups multiple elements together.
        <div>

            {/*
                Display the current value stored in state.

                First Render

                name = ""

                Screen

                (Nothing)

                After 2 Seconds

                setName("Yaswanth")

                React re renders

                name = "Yaswanth"

                Screen

                Yaswanth
            */}
            <h2>{name}</h2>

        </div>
    );
}



// Export this component.
//
// Purpose:
// Allow other files to import and use it.
//
// Example:
//
// import UserProfile from "./UserProfile";
//
// Then:
//
// <UserProfile />
export default UserProfile;