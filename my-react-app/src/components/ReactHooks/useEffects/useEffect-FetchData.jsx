// Import the useEffect Hook.
//
// Purpose:
// useEffect is used to perform side effects.
//
// A side effect is anything that happens outside
// React's rendering process.
//
// Here the side effect is:
// Fetching data from an external API.
//
// Import the useState Hook.
//
// Purpose:
// useState allows this component to store data
// that can change over time.
//
// Here it stores the list of users
// received from the API.
import { useEffect, useState } from "react";



// Create a Functional Component.
//
// Purpose:
// Display a list of users fetched
// from an external server.
//
// React executes this function:
//
// 1. When the component first loads.
// 2. Whenever its state changes.
// 3. Whenever its props change.
function Users() {

    // Create a state variable.
    //
    // Purpose:
    // Store the array of users returned from the API.
    //
    // useState([])
    //
    // [] is the initial state.
    //
    // During the first render,
    // React stores an empty array in its internal memory.
    //
    // React internally remembers:
    //
    // users = []
    //
    // users
    // Holds the current array of user objects.
    //
    // setUsers
    // Updates the state with new data.
    //
    // Never write:
    //
    // users = [...]
    //
    // React will NOT detect that change.
    //
    // Always use:
    //
    // setUsers(...)
    //
    // because React only tracks updates
    // made through the setter function.
    const [users, setUsers] = useState([]);



    // Execute a side effect.
    //
    // Purpose:
    // Fetch user data from an external API
    // after the component has rendered.
    //
    // Why use useEffect for fetching?
    //
    // Fetching data requires a network request.
    // Network requests take time.
    //
    // React should NOT wait for the data
    // before displaying the screen.
    //
    // Instead:
    //
    // Step 1. React renders the component with an empty array.
    // Step 2. The screen appears (empty list).
    // Step 3. useEffect runs and starts fetching data.
    // Step 4. Data arrives from the server.
    // Step 5. setUsers() updates the state.
    // Step 6. React re-renders with the new data.
    // Step 7. The screen now shows the list of users.
    //
    // React Flow:
    //
    // Render Component
    // ↓
    // Create Virtual DOM
    // ↓
    // Update Real DOM
    // ↓
    // Display Screen (empty list)
    // ↓
    // Execute useEffect()
    // ↓
    // Fetch Data from API
    // ↓
    // Data Arrives
    // ↓
    // setUsers(data)
    // ↓
    // React Re-renders (list of users)
    useEffect(() => {

        // fetch() is a built-in Browser API.
        //
        // Purpose:
        // Send an HTTP request to a server
        // and receive a response.
        //
        // React does NOT provide fetch().
        // It comes from the browser itself.
        //
        // "https://jsonplaceholder.typicode.com/users"
        //
        // This is a free, public API
        // that returns fake user data
        // for testing purposes.
        //
        // It returns an array of 10 user objects,
        // each containing:
        //
        // {
        //     id: 1,
        //     name: "Leanne Graham",
        //     username: "Bret",
        //     email: "Sincere@april.biz",
        //     ...
        // }
        //
        // fetch() returns a Promise.
        //
        // What is a Promise?
        //
        // A Promise represents a value
        // that is NOT available yet
        // but WILL be available in the future.
        //
        // Think of it like ordering food:
        //
        // You place the order.   → fetch()
        // You receive a receipt. → Promise
        // Food arrives later.    → .then()
        fetch("https://jsonplaceholder.typicode.com/users")

            // First .then()
            //
            // Purpose:
            // Convert the raw HTTP response
            // into a JavaScript object.
            //
            // "response" is the raw HTTP response
            // from the server.
            //
            // It contains headers, status codes,
            // and a body that is NOT yet readable.
            //
            // response.json()
            //
            // Reads the body of the response
            // and converts it from JSON text
            // into a JavaScript array or object.
            //
            // JSON stands for
            // JavaScript Object Notation.
            //
            // Example:
            //
            // Server sends this JSON text:
            //
            // '[{"id":1,"name":"Leanne Graham"}]'
            //
            // response.json() converts it to:
            //
            // [{id: 1, name: "Leanne Graham"}]
            //
            // response.json() also returns a Promise,
            // so we need another .then() to access
            // the actual data.
            .then(response => response.json())

            // Second .then()
            //
            // Purpose:
            // Receive the actual JavaScript data
            // and store it in React state.
            //
            // "data" is now a JavaScript array
            // containing 10 user objects.
            //
            // Example:
            //
            // data = [
            //     { id: 1, name: "Leanne Graham" },
            //     { id: 2, name: "Ervin Howell" },
            //     { id: 3, name: "Clementine Bauch" },
            //     ...
            // ]
            .then(data => {

                // Update the state.
                //
                // Purpose:
                // Replace the empty array
                // with the fetched user data.
                //
                // React internally does:
                //
                // Step 1
                // Store:
                //
                // users = [
                //     { id: 1, name: "Leanne Graham" },
                //     { id: 2, name: "Ervin Howell" },
                //     ...
                // ]
                //
                // Step 2
                // Schedule another render.
                //
                // Step 3
                // Execute Users() again.
                //
                // Step 4
                // Create a new Virtual DOM
                // (now with list items).
                //
                // Step 5
                // Compare with the previous Virtual DOM.
                //
                // Step 6
                // Update only the changed parts
                // in the real DOM.
                //
                // The screen changes from:
                //
                // (empty list)
                //
                // to:
                //
                // • Leanne Graham
                // • Ervin Howell
                // • Clementine Bauch
                // • ...
                setUsers(data);

            });

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
        // ✓ Runs (fetches data)
        //
        // Second Render
        // ✗ Does NOT run
        //
        // Third Render
        // ✗ Does NOT run
        //
        // This is correct for data fetching
        // because we only need to fetch
        // the user list one time.
        //
        // Without the empty array:
        //
        // useEffect(() => { ... })
        //
        // The effect would run after EVERY render.
        // That would create an infinite loop:
        //
        // Render → Fetch → setUsers → Render → Fetch → ...
        //
        // The empty array prevents this.
        []);



    // Return JSX.
    //
    // Purpose:
    // Describe what should appear on the screen.
    //
    // React converts JSX into React Elements,
    // then updates the DOM accordingly.
    return (

        // ul = Unordered List.
        //
        // Purpose:
        // Display the users as a bullet-point list.
        <ul>

            {/*
                .map() is a JavaScript Array method.

                Purpose:
                Transform each item in the array
                into a piece of JSX.

                How .map() works:

                It loops through every element
                in the "users" array.

                For each element,
                it executes the callback function.

                The callback receives one user object
                at a time.

                It returns a new array
                containing the results.

                Example:

                users = [
                    { id: 1, name: "Leanne Graham" },
                    { id: 2, name: "Ervin Howell" },
                ]

                users.map(user => (
                    <li>{user.name}</li>
                ))

                Result:

                [
                    <li>Leanne Graham</li>,
                    <li>Ervin Howell</li>,
                ]

                React then renders each <li>
                inside the <ul>.
            */}
            {users.map(user => (

                // li = List Item.
                //
                // key={user.id}
                //
                // Purpose:
                // A unique identifier for each list item.
                //
                // Why is key important?
                //
                // When React re-renders,
                // it needs to know which items
                // changed, were added, or were removed.
                //
                // Without a key:
                //
                // React would re-render ALL items
                // every time, which is slow.
                //
                // With a key:
                //
                // React matches items by their key
                // and only updates what changed.
                //
                // Rules for keys:
                //
                // 1. Must be unique among siblings.
                // 2. Must be stable (not change between renders).
                // 3. Never use array index as key
                //    if the list can be reordered.
                //
                // user.id is a perfect key
                // because each user has a unique id
                // that never changes.
                <li key={user.id}>
                    {user.name}
                </li>

            ))}

        </ul>

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
// import Users from "./useEffect-FetchData";
//
// Then:
//
// <Users />
export default Users;