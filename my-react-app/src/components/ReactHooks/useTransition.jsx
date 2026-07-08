// Import useState.
//
// Purpose:
// Store values that can change over time.
//
// Import useTransition.
//
// Purpose:
// Mark some state updates as low priority.
// This keeps the UI responsive while React
// performs expensive rendering in the background.
import { useState, useTransition } from "react";



// Sample product list.
//
// In a real application,
// this could be fetched from an API
// or contain thousands of entries.
//
// A large list makes filtering expensive,
// which is the ideal use case for useTransition.
const products = [
    "React",
    "React Native",
    "React Router",
    "Redux",
    "Remix",
    "Next.js",
    "Node.js",
    "Nuxt.js",
    "Angular",
    "Astro",
    "Vue.js",
    "Vite",
    "Svelte",
    "SolidJS",
    "Gatsby",
    "Express",
    "Ember.js",
    "Tailwind CSS",
    "TypeScript",
    "JavaScript",
];


// Create a Functional Component.
//
// React executes this function:
//
// 1. When the component first loads.
// 2. Whenever state changes.
// 3. Whenever props change.
function Search() {

    // Store the text entered by the user.
    //
    // Initial value:
    //
    // ""
    //
    // Every time the user types,
    // this state changes immediately.
    const [text, setText] = useState("");



    // Store the filtered search results.
    //
    // Initially there are no results,
    // so we start with an empty array.
    //
    // After filtering,
    // React stores matching products here.
    const [results, setResults] = useState([]);



    // useTransition returns two values.
    //
    // isPending
    //
    // Boolean value.
    // True while React is processing
    // a low priority update.
    //
    // startTransition
    //
    // Function used to mark updates
    // as low priority.
    //
    // React will perform these updates
    // after urgent work has finished.
    const [isPending, startTransition] = useTransition();



    // Event handler.
    //
    // Runs every time the user types.
    function handleChange(e) {

        // Read the current value
        // from the input box.
        //
        // Example
        //
        // User types:
        //
        // React
        //
        // value becomes
        //
        // "React"
        const value = e.target.value;



        // High Priority Update.
        //
        // Purpose:
        // Update the textbox immediately.
        //
        // React treats typing as urgent.
        //
        // The user should never feel
        // input lag.
        setText(value);



        // Low Priority Update.
        //
        // Purpose:
        // Filtering a large product list
        // may take time.
        //
        // Instead of blocking typing,
        // React performs this work later.
        //
        // The UI stays smooth because
        // the input update already happened.
        startTransition(() => {

            // Filter the products.
            //
            // Imagine this array contains
            // 20,000 products.
            //
            // Searching through all of them
            // is expensive.
            //
            // React performs this work
            // in the background.
            const filtered = products.filter(product =>

                // Keep only products
                // that contain the text
                // entered by the user.
                product.includes(value)

            );



            // Store the filtered products.
            //
            // React schedules another render.
            //
            // During that render,
            // the screen updates with
            // the matching products.
            setResults(filtered);

        });

    }



    // Return JSX.
    //
    // Purpose:
    // Describe what should appear
    // on the screen.
    return (

        <div>

            {/*

                Controlled Input.

                The value displayed inside
                the textbox always comes
                from React State.

            */}
            <input

                // Display current state.
                value={text}

                // Run handleChange()
                // whenever the user types.
                onChange={handleChange}

            />



            {/*

                Show a loading message
                while React is processing
                the transition.

                isPending

                false

                Nothing is shown.

                isPending

                true

                "Loading..."

                appears.

            */}
            {isPending && <p>Loading...</p>}



            {/*

                Display every filtered product.

                React loops through the array
                and creates one <p> element
                for every product.

                key

                Helps React identify each item
                during Reconciliation.

            */}
            {results.map(product => (

                <p key={product}>
                    {product}
                </p>

            ))}

        </div>

    );

}

export default Search;