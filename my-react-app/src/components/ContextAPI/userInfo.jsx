// Import useContext.
//
// Purpose:
//
// Read data from Context.
import { useContext } from "react";

// Import UserContext.
import UserContext from "./UserContext";



function UserInfo() {

    // Read the Context value.
    //
    // React looks for
    // the nearest Provider.
    //
    // It returns
    // the user object.
    const user = useContext(UserContext);



    return (

        <div>

            {/*

                Display the user's name.

            */}
            <h2>

                {user.name}

            </h2>



            {/*

                Display the user's role.

            */}
            <h3>

                {user.role}

            </h3>

        </div>

    );

}

export default UserInfo;