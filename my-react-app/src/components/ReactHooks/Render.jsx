import { useState } from "react";

function Render() {
    const [count, setCount] = useState(0)
    console.log("Componenet Render")

    return (
        <div>
            <h2 className="text-primary">{count}</h2>


            <button onClick={() => setCount(count + 1)}>Click Here</button>
        </div>
    )
}

export default Render