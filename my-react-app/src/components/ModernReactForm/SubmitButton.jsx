// Import useFormStatus.
//
// Purpose:
//
// Know whether the form
// is currently submitting.
import { useFormStatus } from "react-dom";



function SubmitButton() {

    // pending

    // true

    // Form is submitting.

    // false

    // Form is idle.
    const {

        pending

    } = useFormStatus();



    return (

        <button

            // Disable the button
            // while submitting.
            disabled={pending}

        >

            {/*

                Show different text
                based on pending.

            */}
            {pending

                ? "Submitting..."

                : "Login"

            }

        </button>

    );

}

export default SubmitButton;