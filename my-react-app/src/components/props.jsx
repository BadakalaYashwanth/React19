// Import React and useState.
import { useState } from "react";

// Import the child component.
import UserCard from "./userCard";

// Create the parent component.
function Props() {

    // Create a state variable named username.
    // The parent owns this state.
    const [username, setUsername] = useState("Yaswanth");

    // Return the UI.
    return (
        <div>

            {/* Pass the state value to the child as a prop. */}
            <UserCard name={username} />

            {/* Update the parent's state when clicked. */}
            <button onClick={() => setUsername("Rahul")}>
                Change Name
            </button>

        </div>
    );
}

// Export the component.
export default Props;