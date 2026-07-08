// Import React because JSX is used.
import React from "react";

// Create a React Element.
// JSX automatically creates a React Element object.
const heading = <h1>Welcome to React</h1>;

// Create a React Component.
// A component is simply a JavaScript function.
function App() {

    // Create a string.
    // A string is a valid React Node.
    const name = "Yaswanth";

    // Return JSX.
    // Everything returned here is a React Node.
    return (
        <div>

            {/* Render the React Element created earlier. */}
            {heading}

            {/* Render a string. Strings are React Nodes. */}
            <p>Hello, {name}</p>

            {/* Render a number. Numbers are also React Nodes. */}
            <p>Age: {22}</p>

            {/* Render an array of React Elements. Arrays are valid React Nodes. */}
            {[
                <p key="1">HTML</p>,
                <p key="2">CSS</p>,
                <p key="3">React</p>
            ]}

        </div>
    );
}

// Export the component.
export default App;