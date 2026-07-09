// Import useState.
//
// Purpose:
// useState allows React to store data
// that can change over time.
//
// Whenever a state value changes,
// React automatically re-renders
// the component.
import { useState } from "react";



// Create the LoginForm component.
//
// React executes this function:
//
// 1. When the component first loads.
// 2. Whenever one of its state values changes.
function LoginForm() {

    // Create state for the email input.
    //
    // email
    // Stores the current email entered by the user.
    //
    // setEmail
    // Updates the email state.
    //
    // Initial value:
    // ""
    //
    // React remembers this value between renders.
    const [email, setEmail] = useState("");



    // Create state for the password input.
    //
    // password
    // Stores the current password.
    //
    // setPassword
    // Updates the password state.
    //
    // Initial value:
    // ""
    const [password, setPassword] = useState("");



    // Create state for the success message.
    //
    // Initially empty.
    //
    // After successful validation,
    // React updates this value
    // and displays the message.
    const [message, setMessage] = useState("");



    // Handle form submission.
    //
    // This function executes only
    // when the user submits the form.
    function handleSubmit(event) {

        // Prevent the browser's
        // default form submission.
        //
        // Without this,
        // the browser refreshes
        // the page.
        //
        // React applications
        // should stay on the same page.
        event.preventDefault();



        // Check whether
        // the email field is empty.
        //
        // If empty,
        // stop the submission.
        if (email === "") {

            alert("Please enter your email");

            // Stop executing
            // the remaining code.
            return;

        }



        // Check whether
        // the password field is empty.
        //
        // If empty,
        // stop the submission.
        if (password === "") {

            alert("Please enter your password");

            return;

        }



        // Normally,
        // this is where we would
        // call an API.
        //
        // Example:
        //
        // fetch(...)
        //
        // or
        //
        // axios.post(...)
        //
        // Since this example
        // has no backend,
        // we simply show
        // a success message.



        // Update the success message.
        //
        // React stores
        // the new value.
        //
        // React then schedules
        // another render.
        setMessage("Login Successful");



        // Clear the email input.
        //
        // React updates
        // the email state.
        //
        // Since the input
        // is controlled,
        // the textbox also becomes empty.
        setEmail("");



        // Clear the password input.
        //
        // The password textbox
        // also becomes empty
        // because its value
        // comes from React State.
        setPassword("");

    }



    // Return the UI.
    //
    // JSX describes
    // what should appear
    // on the screen.
    return (

        <div>

            {/*

                Display the form title.

            */}
            <h2 className="text-dark">

                Login Form

            </h2>



            {/*

                Form Element.

                onSubmit

                Runs when the user
                clicks the Login button
                or presses Enter.

                React automatically
                passes the event object
                to handleSubmit().
            */}
            <form onSubmit={handleSubmit}>

                {/*

                    Controlled Email Input.

                    value

                    Comes directly
                    from React State.

                    React controls
                    what is displayed
                    inside the textbox.

                */}
                <input

                    // Email input type.
                    type="email"

                    // Placeholder text.
                    placeholder="Email"

                    // Display the value
                    // stored in React State.
                    value={email}

                    // Execute whenever
                    // the user types.
                    //
                    // e.target.value
                    // contains the latest text.
                    //
                    // setEmail()
                    // updates React State.
                    //
                    // React Flow:
                    //
                    // User Types
                    //
                    // ↓
                    //
                    // onChange
                    //
                    // ↓
                    //
                    // setEmail()
                    //
                    // ↓
                    //
                    // State Updates
                    //
                    // ↓
                    //
                    // Component Re-renders
                    //
                    // ↓
                    //
                    // Updated Value Appears
                    onChange={(e) =>

                        setEmail(e.target.value)

                    }

                />

                <br />

                <br />



                {/*

                    Controlled Password Input.

                    Works exactly
                    like the email input.

                */}
                <input

                    // Password field.
                    type="password"

                    // Placeholder text.
                    placeholder="Password"

                    // Display password
                    // stored in state.
                    value={password}

                    // Update password state
                    // whenever the user types.
                    onChange={(e) =>

                        setPassword(e.target.value)

                    }

                />

                <br />

                <br />



                {/*

                    Submit Button.

                    type="submit"

                    Clicking this button
                    automatically triggers

                    onSubmit

                    on the form.

                    React then calls

                    handleSubmit().

                */}
                <button type="submit">

                    Login

                </button>

            </form>



            {/*

                Conditional Rendering.

                && means:

                If message is NOT empty,

                display the paragraph.

                If message is empty,

                display nothing.

                Initially:

                ""

                Nothing appears.

                After successful login:

                "Login Successful"

                React displays the message.

            */}
            {message &&

                <p>

                    {message}

                </p>

            }

        </div>

    );

}



// Export the component.
//
// This allows App.js
// or another component
// to import and use LoginForm.
export default LoginForm;