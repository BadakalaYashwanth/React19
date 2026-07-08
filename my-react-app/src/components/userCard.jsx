// Receive props as a function parameter.
function UserCard(props) {

    // Return the UI.
    return (

        // Display the value received from the parent.
        <h2>Hello, {props.name}</h2>

    );
}

// Export the component.
export default UserCard;