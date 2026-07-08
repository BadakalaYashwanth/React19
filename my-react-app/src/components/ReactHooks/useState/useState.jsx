// Import the useState Hook from React.
// Purpose:
// React provides many Hooks, and useState is one of them.
// We import it because this component needs to remember whether the user
// is logged in or not.
//
// What does it do?
// It gives the component its own memory (state).
// Without useState, the login status would reset every time the component renders.
import { useState } from "react";


// Create a Functional Component named LoginStatus.
// Purpose:
// Every React application is built using components.
// A component is simply a JavaScript function that returns JSX.
//
// What does React do?
// React calls this function to build the UI.
// Whenever the state changes, React calls this function again to create an updated UI.
function LoginStatus() {

    // Create a state variable and a setter function.
    //
    // Purpose:
    // We need to remember whether the user has logged in.
    // Since this value changes while the application is running,
    // we store it inside React State.
    //
    // useState(false)
    // Purpose:
    // false is the initial value.
    // During the first render, React stores false in its internal memory.
    //
    // React internally thinks something like:
    //
    // State Memory
    // isLoggedIn = false
    //
    // isLoggedIn
    // Purpose:
    // Holds the current login status.
    // Initially:
    //
    // isLoggedIn = false
    //
    // setIsLoggedIn
    // Purpose:
    // Updates the login status.
    // Never change isLoggedIn directly.
    //
    // Wrong
    // isLoggedIn = true;
    //
    // Correct
    // setIsLoggedIn(true);
    //
    // Why?
    // React only tracks updates made through the setter function.
    // When the setter is called,
    // React stores the new value,
    // re executes the component,
    // compares the new Virtual DOM with the old one,
    // then updates only the changed UI.
    const [isLoggedIn, setIsLoggedIn] = useState(false);



    // Create a normal JavaScript function.
    //
    // Purpose:
    // This function should run only after the user clicks the Login button.
    //
    // React does NOT execute this function automatically.
    // It waits until the button's onClick event occurs.
    function login() {

        // Update the login state.
        //
        // Purpose:
        // Change the login status from false to true.
        //
        // What happens internally?
        //
        // Step 1
        // React stores:
        //
        // isLoggedIn = true
        //
        // Step 2
        // React schedules a re render.
        //
        // Step 3
        // React executes LoginStatus() again.
        //
        // Step 4
        // React creates a new Virtual DOM.
        //
        // Step 5
        // React compares it with the previous Virtual DOM.
        //
        // Step 6
        // Only the changed elements are updated in the Real DOM.
        //
        // Important:
        // This line DOES NOT immediately change isLoggedIn.
        // The new value becomes available during the next render.
        setIsLoggedIn(true);
    }



    // Return the JSX.
    //
    // Purpose:
    // Describe what should appear on the screen.
    //
    // JSX looks like HTML,
    // but it is actually JavaScript syntax.
    // React converts JSX into React Elements.
    return (

        // div is simply a container.
        // Purpose:
        // Group multiple elements into one parent element.
        <div>

            {/* 
                Display different text depending on the login status.

                Purpose:
                Show one message before login
                and another after login.

                This is called Conditional Rendering.

                Syntax

                condition ? valueIfTrue : valueIfFalse

                First Render

                isLoggedIn = false

                Output

                Please Login

                After clicking Login

                isLoggedIn = true

                Output

                Welcome Yaswanth
            */}
            <h2>
                {isLoggedIn ? "Welcome Yaswanth" : "Please Login"}
            </h2>



            {/*
                Create a button.

                Purpose:
                Allow the user to log in.

                onClick is a React Event Handler.

                When the button is clicked,
                React executes the login() function.

                Notice:

                onClick={login}

                NOT

                onClick={login()}

                Why?

                login
                Passes the function reference.
                React calls it later when the click happens.

                login()
                Executes the function immediately during rendering,
                which is incorrect.
            */}
            <button onClick={login}>
                Login
            </button>

        </div>
    );
}



// Export this component.
//
// Purpose:
// Makes this component available to other files.
//
// Example:
//
// import LoginStatus from "./LoginStatus";
//
// Then it can be rendered as:
//
// <LoginStatus />
export default LoginStatus;