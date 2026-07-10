// Import useActionState.
//
// Purpose:
// Manage the state returned
// from a form Action.
import { useActionState } from "react";

// Import SubmitButton.
//
// Purpose:
// Display a submit button
// that knows when the form
// is submitting.
import SubmitButton from "./SubmitButton";



// Create an async Action.
// Purpose:
//
// React automatically calls
// this function when the
// form is submitted.
//
// previousState
//
// Contains the previous value
// returned by this Action.
//
// formData
//
// Contains all values
// entered in the form.
async function loginAction(previousState, formData) {

    // Read the email value
    // from the submitted form.
    const email = formData.get("email");



    // Simulate an API request.
    //
    // Normally this would be:
    //
    // await fetch(...)
    await new Promise(resolve =>

        setTimeout(resolve, 2000)

    );



    // Simple validation.
    if (!email) {

        return {

            success: false,

            message: "Email is required."

        };

    }



    // Return success.
    //
    // React automatically
    // updates the state
    // returned by
    // useActionState().
    return {

        success: true,

        message: `Welcome ${email}`

    };

}



function Modern() {

    // useActionState
    //
    // loginAction
    // The function that runs
    // when the form submits.
    //
    // Initial State
    //
    // The state before
    // any submission.
    //
    // state
    // Stores the latest
    // result returned
    // from loginAction.
    //
    // formAction
    // Attach this directly
    // to the form.
    const [

        state,

        formAction

    ] = useActionState(

        loginAction,

        {

            success: false,

            message: ""

        }

    );



    return (

        <div>

            <h2>React 19 Form</h2>

            {/*

                action

                Instead of

                onSubmit,

                React 19 lets
                the form call
                the Action directly.

            */}
            <form action={formAction}>

                {/*

                    React automatically
                    includes this value
                    inside formData.

                */}
                <input

                    type="email"

                    name="email"

                    placeholder="Enter Email"

                />

                <br />

                <br />



                {/*

                    Submit Button.

                */}
                <SubmitButton />

            </form>



            {/*

                Display the latest
                Action result.

            */}
            <h3>

                {state.message}

            </h3>

        </div>

    );

}

export default Modern;