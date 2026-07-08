// Import useState.
//
// Purpose:
// Store the value entered by the user.
//
// Import useDeferredValue.
//
// Purpose:
// Create a delayed version of a value.
//
// React gives priority to updating the UI first,
// then updates the deferred value when the browser
// has free time.
import { useState, useDeferredValue } from "react";


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

    // Create a state variable.
    //
    // Purpose:
    // Store whatever the user types
    // into the search input.
    //
    // Initial value:
    //
    // ""
    //
    // Example:
    //
    // User types:
    //
    // React
    //
    // search becomes:
    //
    // "React"
    const [search, setSearch] = useState("");



    // Create a deferred version
    // of the search value.
    //
    // Purpose:
    // Delay expensive rendering.
    //
    // search
    //
    // Updates immediately.
    //
    // deferredSearch
    //
    // Updates slightly later
    // after React finishes
    // urgent work.
    //
    // This keeps typing smooth.
    //
    // Example:
    //
    // search
    //
    // "React"
    //
    // deferredSearch
    //
    // may still be
    //
    // "Reac"
    //
    // for a very short time.
    //
    // React updates it automatically
    // when the browser is free.
    const deferredSearch = useDeferredValue(search);



    // Filter the products.
    //
    // Purpose:
    // Display only products that
    // match the deferred search text.
    //
    // Notice:
    //
    // We are NOT filtering
    // using "search".
    //
    // We are filtering using
    // "deferredSearch".
    //
    // Why?
    //
    // Because filtering thousands
    // of products may be expensive.
    //
    // React delays this calculation
    // until urgent rendering
    // has finished.
    //
    // Without useDeferredValue,
    // this filtering would happen
    // every time the user presses
    // a key.
    const filteredProducts = products.filter(product =>

        // Keep only products
        // that contain
        // the deferred search text.
        product.includes(deferredSearch)

    );



    // Return JSX.
    //
    // Purpose:
    // Display the search input
    // and matching products.
    return (

        <div>

            {/*
                Controlled Input.

                Purpose:

                The value inside
                the textbox always
                comes from React State.
            */}
            <input

                // Display the latest
                // search state.
                value={search}

                // Execute every time
                // the user types.
                //
                // e.target.value
                //
                // contains the current
                // text entered
                // by the user.
                //
                // setSearch()
                //
                // updates React State.
                //
                // React immediately
                // updates the textbox.
                //
                // The deferred value
                // updates later.
                onChange={(e) =>

                    setSearch(e.target.value)

                }

            />



            {/*
                Display every matching product.

                React loops through
                filteredProducts
                using map().

                For every product,

                React creates

                <p>

                on the screen.
            */}
            {filteredProducts.map(product => (

                // key

                // Helps React identify
                // each product during
                // Reconciliation.

                <p key={product}>

                    {product}

                </p>

            ))}

        </div>

    );

}

export default Search;