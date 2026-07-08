import { useState, useEffect } from "react";

function App() {


    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Componenet Render")
    })

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 2 * 2)}>Count</button>
        </div>
    )
}

export default App;