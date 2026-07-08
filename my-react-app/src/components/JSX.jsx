// Import React because JSX is used in this file.
// import React from "react";

// Create a functional component named Welcome.
function Welcome() {

    // Store a value in a JavaScript variable.
    const name = "Yashwanth";

    // Return JSX.
    // Curly braces allow JavaScript expressions inside JSX.
    return (
        <>
            <h1>Hello, {name}</h1>
            <p>Welcome to ReactJS</p>
        </>
    );
}

// Export the component so it can be used elsewhere.
export default Welcome;