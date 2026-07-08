// Create SearchBox Component.
//
// Purpose:
//
// Display an input box.
//
// Receive the parent's state
// through props.
function SearchBox({

    search,

    setSearch

}) {

    return (

        <div>

            {/*

                Controlled Input.

                Purpose:

                Display the current
                search value.

                React controls
                this textbox.

                The textbox does NOT
                manage its own value.

            */}
            <input

                // Display the value
                // stored inside
                // the parent's state.
                value={search}



                // Runs whenever
                // the user types.
                //
                // e.target.value
                //
                // Contains the text
                // entered by the user.
                //
                // setSearch()
                //
                // Updates the state
                // stored inside App.
                //
                // React Flow
                //
                // User Types
                //
                // ↓
                //
                // setSearch()
                //
                // ↓
                //
                // Parent State Updates
                //
                // ↓
                //
                // App Re-renders
                //
                // ↓
                //
                // Updated search prop
                // is sent to BOTH
                // SearchBox and ProductList.
                onChange={(e) =>

                    setSearch(e.target.value)

                }

                placeholder="Search Product"

            />

        </div>

    );

}

export default SearchBox;