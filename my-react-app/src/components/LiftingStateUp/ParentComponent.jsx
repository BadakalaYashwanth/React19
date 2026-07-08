// Import useState.
//
// Purpose:
// Store the search text.
//
// This state is shared between
// multiple child components.
import { useState } from "react";

// Import SearchBox.
//
// Purpose:
// Child component that allows
// the user to type a search value.
import SearchBox from "./SearchBox";

// Import ProductList.
//
// Purpose:
// Child component that displays
// products based on the search value.
import ProductList from "./ProductList";



// Create the Parent Component.
//
// Purpose:
// This component owns the shared state.
//
// Why?
//
// Both SearchBox and ProductList
// need access to the same search value.
//
// Instead of creating two separate states,
// we create ONE state here.
function Search() {

    // Create a state variable.
    //
    // search
    //
    // Stores the current search text.
    //
    // setSearch
    //
    // Updates the search state.
    //
    // React stores this value internally.
    //
    // Whenever search changes,
    // React re-renders App.
    const [search, setSearch] = useState("");



    // Return the UI.
    return (

        <div>

            {/*

                Render SearchBox.

                Purpose:

                Allow the user to type.

                search

                Current search value.

                setSearch

                Function that updates
                the parent's state.

                Notice:

                SearchBox does NOT
                create its own state.

                It uses the parent's state.

            */}
            <SearchBox

                search={search}

                setSearch={setSearch}

            />



            {/*

                Render ProductList.

                Purpose:

                Display products.

                search

                Current search value
                received from the parent.

                ProductList also
                does NOT create
                its own state.

            */}
            <ProductList

                search={search}

            />

        </div>

    );

}

export default Search;