// Import the Custom Hook.
import useCounter from "./CustomHook";


// Create a component.
function App() {

    // Call the Custom Hook.
    //
    // React executes useCounter().
    //
    // useCounter internally executes useState().
    //
    // The returned values become available here.
    const { count, increment, decrement } = useCounter();

    return (

        <div>

            {/* Display the current count. */}
            <h2 className="text-dark">{count}</h2>

            {/* Increase the count when clicked. */}
            <button className="btn btn-primary m-2 text-dark" onClick={increment}>
                Increment
            </button>

            {/* Decrease the count when clicked. */}
            <button className="btn btn-success m-2 text-dark" onClick={decrement}>
                Decrement
            </button>

        </div>

    );

}


export default App;