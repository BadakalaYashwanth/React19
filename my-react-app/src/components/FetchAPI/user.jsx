// Import useEffect.
//
// Purpose:
// Perform side effects such as API calls.
//
// Import useState.
//
// Purpose:
// Store the API data.
import { useEffect, useState } from "react";



// Create the component.
function Users() {

    // Store users returned
    // from the API.
    //
    // Initially,
    // the array is empty
    // because no data
    // has been fetched yet.
    const [users, setUsers] = useState([]);

    // Store loading status.
    //
    // Initially true because
    // the API request has not
    // completed yet.
    const [loading, setLoading] = useState(true);

    // Store error messages.
    //
    // Initially null because
    // there is no error.
    const [error, setError] = useState(null);



    // Fetch data after
    // the component renders.
    //
    // Empty dependency array
    // means this effect runs
    // only once after
    // the first render.
    useEffect(() => {

        // Create an async function.
        //
        // Purpose:
        // We cannot make
        // useEffect itself async,
        // so we define an async
        // function inside it.
        async function fetchUsers() {

            try {

                // Send a GET request
                // to the server.
                const response = await fetch(

                    "https://jsonplaceholder.typicode.com/users"

                );

                // Convert the response
                // into JavaScript objects.
                const data = await response.json();

                // Store the users
                // inside React state.
                //
                // React schedules
                // a re-render.
                setUsers(data);

            } catch {

                // Store the error
                // if the request fails.
                setError("Failed to fetch users.");

            } finally {

                // Stop the loading state
                // whether the request
                // succeeds or fails.
                setLoading(false);

            }

        }

        // Execute the function.
        fetchUsers();

    }, []);




    // Display loading message
    // while the API request
    // is in progress.
    if (loading) {

        return <h2>Loading...</h2>;

    }



    // Display error message
    // if something went wrong.
    if (error) {

        return <h2>{error}</h2>;

    }



    // Display the users.
    return (

        <div>

            <h2 className="text-dark">Users</h2>

            {users.map(user => (

                // key helps React
                // identify each item
                // during Reconciliation.
                <p key={user.id}>

                    {user.name}

                </p>

            ))}

        </div>

    );

}

export default Users;