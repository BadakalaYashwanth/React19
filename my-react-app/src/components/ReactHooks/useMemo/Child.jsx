// Import React.
//
// Purpose:
//
// React.memo belongs
// to the React object.
import React from "react";
function Child({
    name
}) {
    console.log("Child Rendered");

    return (

        <h2 className="text-black m-5">

            Hello {name}

        </h2>

    );

}

// Wrap the component
// with React.memo.
//
// Purpose:
//
// React stores the previous props.
//
// On the next render,
// React compares:
//
// Previous Props
//
// VS
//
// Current Props
//
// If they are equal,
// React skips rendering
// this component.
export default React.memo(Child);