import { useEffect, useState } from "react";

function Wheather() {

    // Store whether the user has clicked Start.
    const [start, setStart] = useState(false);

    useEffect(() => {

        // Do nothing until Start is clicked.
        if (!start) return;

        console.log("Timer Started");

        // Start a timer.
        const timer = setTimeout(() => {

            console.log("5 Seconds Completed");

        }, 5000);

        // Cleanup.
        return () => {

            clearTimeout(timer);

        };

    }, [start]);

    return (

        <button onClick={() => setStart(true)}>
            Start Timer
        </button>

    );

}

export default Wheather;