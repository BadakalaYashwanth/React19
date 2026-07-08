// Import UserContext.
//
// Purpose:
//
// Provide data to
// all child components.
import UserContext from "./UserContext";

import Dashboard from "./Dashboard";



function App() {

    // Data to share.
    //
    // Normally this comes
    // from an API.
    const user = {

        name: "Yaswanth",

        role: "Software Engineer"

    };



    return (

        // Provider.
        //
        // Purpose:
        //
        // Share the user object
        // with every child component.
        //
        // Any child can now
        // access this data
        // without props.
        <UserContext.Provider value={user}>

            <Dashboard />

        </UserContext.Provider>

    );

}

export default App;