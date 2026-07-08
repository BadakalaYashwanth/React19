//Rule 1. Only Call Hooks at the Top Level

// Import the useState Hook.
import { useState } from "react";

// Create a Functional Component.
function App() {

    // Correct.
    // Hook is called at the top level.
    // React always knows this is the first Hook.
    const [count, setCount] = useState(0);

    return (
        <h2 onClick={() => setCount(count + 1)}>{count}</h2>
    );
}

export default App;