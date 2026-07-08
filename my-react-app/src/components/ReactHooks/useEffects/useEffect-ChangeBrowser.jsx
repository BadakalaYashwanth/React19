// Import the useState Hook.
//
// Purpose:
// useState allows this component to store data that can change.
//
// Import the useEffect Hook.
//
// Purpose:
// useEffect is used to perform side effects.
//
// A side effect is anything that happens outside
// React's rendering process.
//
// Examples:
// API Calls
// Browser Title
// Timers
// Event Listeners
// Local Storage
import { useEffect, useState } from "react";



// Create a Functional Component.
//
// Purpose:
// Every React application is built using components.
//
// React executes this function:
//
// 1. When the component first loads.
// 2. Whenever its state changes.
// 3. Whenever its props change.
function App() {

    // Create a state variable.
    //
    // Purpose:
    // Store whatever the user types into the input box.
    //
    // Initial State
    //
    // name = ""
    //
    // React stores this value internally.
    //
    // name
    // Contains the current value.
    //
    // setName
    // Updates the value.
    //
    // Never write:
    //
    // name = "Yaswanth";
    //
    // React will NOT detect that change.
    //
    // Always use:
    //
    // setName(...)
    //
    // because React only tracks updates
    // made through the setter function.
    const [name, setName] = useState("");



    // Execute a side effect.
    //
    // Purpose:
    // Update the browser tab title
    // whenever the name changes.
    //
    // This is called a Side Effect because
    // changing the browser title is NOT part
    // of rendering the UI.
    //
    // React Flow
    //
    // Render Component
    // ↓
    // Create Virtual DOM
    // ↓
    // Update Real DOM
    // ↓
    // Display Screen
    // ↓
    // Execute useEffect()
    //
    // Notice:
    // useEffect ALWAYS runs AFTER rendering.
    useEffect(() => {

        // Update the browser tab title.
        //
        // document.title
        //
        // is a normal JavaScript Browser API.
        //
        // React does not provide this.
        //
        // Example:
        //
        // Before typing
        //
        // Browser Tab
        //
        // Hello
        //
        // User types
        //
        // Yaswanth
        //
        // Browser Tab becomes
        //
        // Hello Yaswanth
        //
        // Every time "name" changes,
        // this line executes again.
        document.title = `Hello ${name}`;

    },

        // Dependency Array.
        //
        // Purpose:
        // Tell React when this effect should execute.
        //
        // [name]
        //
        // Means:
        //
        // Run after the first render.
        //
        // Run again ONLY if "name" changes.
        //
        // React compares the previous value
        // with the new value.
        //
        // If they are different,
        // React executes the effect again.
        //
        // Example
        //
        // name = ""
        // ✓ Effect Runs
        //
        // name = "Y"
        // ✓ Effect Runs
        //
        // name = "Ya"
        // ✓ Effect Runs
        //
        // name = "Yas"
        // ✓ Effect Runs
        //
        // If another state changes
        // but name stays the same,
        // this effect will NOT execute.
        [name]);



    // Return JSX.
    //
    // Purpose:
    // Describe what should appear on the screen.
    //
    // React converts JSX into React Elements,
    // then updates the DOM accordingly.
    return (

        // Container element.
        <div>

            {/*

                Create a text input.

                Purpose:
                Allow the user to enter their name.

            */}
            <input

                // Defines the input type.
                //
                // "text" allows normal text input.
                type="text"



                // Controlled Component.
                //
                // Purpose:
                // The value shown inside the textbox
                // always comes from React State.
                //
                // Current Flow
                //
                // React State
                // ↓
                // name
                // ↓
                // Input Box
                //
                // The textbox NEVER manages
                // its own value.
                //
                // React controls it.
                value={name}



                // React Event Handler.
                //
                // Purpose:
                // Execute whenever the user types.
                //
                // Every keyboard press triggers:
                //
                // onChange
                //
                // "e"
                //
                // represents the Event Object.
                //
                // e.target
                //
                // refers to the input element.
                //
                // e.target.value
                //
                // contains whatever the user typed.
                //
                // Example
                //
                // User types:
                //
                // Y
                //
                // e.target.value
                //
                // "Y"
                //
                // User types:
                //
                // Yas
                //
                // e.target.value
                //
                // "Yas"
                //
                // setName()
                //
                // updates React State.
                //
                // React then:
                //
                // Store new state
                // ↓
                // Render component again
                // ↓
                // Input value updates
                // ↓
                // useEffect runs
                // ↓
                // Browser title updates
                onChange={(e) => setName(e.target.value)}



                // Placeholder text.
                //
                // Purpose:
                // Show a hint before the user types.
                //
                // Placeholder disappears
                // as soon as typing begins.
                placeholder="Enter your name"
            />

        </div>
    );
}



// Export the component.
//
// Purpose:
// Makes this component available
// to other files.
//
// Example:
//
// import App from "./App";
//
// Then:
//
// <App />
export default App;