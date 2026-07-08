// Rule 4. Only Call Hooks Inside React Components or Custom Hooks

import { useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    return <h2>{count}</h2>;
}

export default App;