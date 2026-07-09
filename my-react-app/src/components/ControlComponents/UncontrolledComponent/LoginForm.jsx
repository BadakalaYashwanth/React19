// Import useRef.
//
// Purpose:
// Access the DOM element directly.
import { useRef } from "react";

function LoginForm() {

    // Create a reference.
    //
    // React stores
    // the input element.
    const inputRef = useRef();

    function handleSubmit() {

        // Read the value
        // directly from the DOM.
        alert(inputRef.current.value);

    }

    return (

        <div>

            <input

                ref={inputRef}

                placeholder="Enter Name"

            />

            <button

                onClick={handleSubmit}

            >

                Submit

            </button>

        </div>

    );

}

export default LoginForm;