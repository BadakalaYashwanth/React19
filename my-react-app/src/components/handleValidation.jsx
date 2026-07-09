// Import useState.
//
// Purpose:
// Store form values
// and error messages.
import { useState } from "react";



// Create the RegisterForm component.
//
// React executes this function:
//
// 1. When the component first loads.
// 2. Whenever state changes.
function RegisterForm() {

    // Store the user's name.
    //
    // Initially empty.
    const [name, setName] = useState("");



    // Store the user's email.
    //
    // Initially empty.
    const [email, setEmail] = useState("");



    // Store the user's password.
    //
    // Initially empty.
    const [password, setPassword] = useState("");



    // Store validation errors.
    //
    // Initially no errors.
    //
    // Example:
    //
    // {
    //     name: "",
    //     email: "",
    //     password: ""
    // }
    const [errors, setErrors] = useState({});



    // Store the success message.
    //
    // Initially empty.
    const [message, setMessage] = useState("");



    // Handle form submission.
    function handleSubmit(event) {

        // Prevent page refresh.
        event.preventDefault();



        // Create an object
        // to store validation errors.
        const newErrors = {};



        // Required Name Validation.
        if (name.trim() === "") {

            newErrors.name = "Name is required.";

        }



        // Required Email Validation.
        if (email.trim() === "") {

            newErrors.email = "Email is required.";

        }

        // Email Format Validation.
        else if (!email.includes("@")) {

            newErrors.email = "Invalid email format.";

        }



        // Password Validation.
        if (password.length < 8) {

            newErrors.password =
                "Password must be at least 8 characters.";

        }



        // Store all validation errors.
        //
        // React re-renders
        // and displays them.
        setErrors(newErrors);



        // Check whether
        // any validation failed.
        //
        // If errors exist,
        // stop submission.
        if (Object.keys(newErrors).length > 0) {

            return;

        }



        // Normally,
        // this is where
        // the API request
        // would be sent.
        //
        // Example:
        //
        // fetch(...)
        //
        // axios.post(...)



        // Display success message.
        setMessage("Registration Successful!");



        // Clear the form.
        setName("");
        setEmail("");
        setPassword("");



        // Remove old errors.
        setErrors({});

    }



    return (

        <div>

            <h2>Register Form</h2>

            <form onSubmit={handleSubmit}>

                {/* Name */}

                <input

                    type="text"

                    placeholder="Enter Name"

                    value={name}

                    onChange={(e) =>

                        setName(e.target.value)

                    }

                />

                {/* Show Name Error */}

                {errors.name &&

                    <p style={{ color: "red" }}>

                        {errors.name}

                    </p>

                }

                <br />



                {/* Email */}

                <input

                    type="email"

                    placeholder="Enter Email"

                    value={email}

                    onChange={(e) =>

                        setEmail(e.target.value)

                    }

                />

                {/* Show Email Error */}

                {errors.email &&

                    <p style={{ color: "red" }}>

                        {errors.email}

                    </p>

                }

                <br />



                {/* Password */}

                <input

                    type="password"

                    placeholder="Enter Password"

                    value={password}

                    onChange={(e) =>

                        setPassword(e.target.value)

                    }

                />

                {/* Show Password Error */}

                {errors.password &&

                    <p style={{ color: "red" }}>

                        {errors.password}

                    </p>

                }

                <br />

                <br />



                <button type="submit">

                    Register

                </button>

            </form>



            {/* Success Message */}

            {message &&

                <h3>

                    {message}

                </h3>

            }

        </div>

    );

}

export default RegisterForm;