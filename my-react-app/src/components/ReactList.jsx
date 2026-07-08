

// Create an array of objects.
// Each object has a unique id.
const users = [
    { id: 3, name: "Sreeeja" },
    { id: 1, name: "Yaswanth" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Kiran" },
    { id: 5, name: "Varnika" }
];

// Create a Functional Component.
function UserList() {

    // Return the UI.
    return (

        // Create an unordered list.
        <ul>

            {/* Loop through every user. */}
            {users.map(user => (

                // Use the unique id as the key.
                // React uses this key during reconciliation.
                <li key={user.id}>

                    {/* Display the user's name. */}
                    {user.id} = {user.name}

                </li>

            ))}

        </ul>

    );
}

// Export the component.
export default UserList;