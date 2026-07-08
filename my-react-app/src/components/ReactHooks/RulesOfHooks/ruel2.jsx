// Rule 2. Never Call Hooks Inside Loops

import { useState } from "react";

function App() {

    // Wrong.
    // Number of Hook calls depends
    // on the loop.
    for (let i = 0; i < 5; i++) {

        useState(i);

    }

    return <h2>Hello</h2>;
}