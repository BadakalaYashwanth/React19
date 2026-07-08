// Import React because JSX is used.
import React, { useState } from "react";

// Create a Functional Component.
function FunctionalComponent() {

    // Create a state variable named count.
    // useState returns the current value and a function to update it.
    const [count, setCount] = useState(0);

    // Return the UI.
    return (
        <div>

            {/* Display the current count value. */}
            <h2>Count: {count}</h2>

            {/* Increase the count when the button is clicked. */}
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>

        </div>
    );
}

// Export the component.
export default FunctionalComponent;