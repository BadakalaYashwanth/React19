// Rule 3. Never Call Hooks Inside Nested Functions
import { useState } from "react";

function App() {

    function getData() {

        // Wrong.
        // Hooks cannot be called here.
        useState(0);

    }

    getData();

    return <h2>Hello</h2>;
}