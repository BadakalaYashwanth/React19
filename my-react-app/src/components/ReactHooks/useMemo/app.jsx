// Import useState.
//
// Purpose:
// Store the counter value.
import { useState } from "react";

// Import the Child component.
import Child from "./Child";

function Memo() {

    // Create a state variable.
    //
    // Purpose:
    // Store the count.
    //
    // Every time this changes,
    // App re-renders.
    const [count, setCount] = useState(0);

    return (

        <div>

            {/*

                Display the count.

            */}
            <h2 className="text-dark">Count : {count}</h2>

            {/*

                Increase the count.

                Clicking this button
                updates the state.

                React re-renders App.

            */}
            <button

                onClick={() =>

                    setCount(count + 1)

                }

            >

                Increment

            </button>

            {/*

                Render Child.

                We pass the same
                name prop every time.

                name never changes.

            */}
            <Child name="Yaswanth" />

        </div>

    );

}

export default Memo;