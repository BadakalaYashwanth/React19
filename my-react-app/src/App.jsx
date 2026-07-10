import useCounter from "./components/type/CustomHook/useCounter";

function App() {
    const { count, increment, decrement } = useCounter(0);

    return (
        <div className="d-flex flex-column gap-4 p-4 align-items-center">
            <h2>Count: {count}</h2>
            <div className="d-flex gap-2">
                <button className="btn btn-primary" onClick={increment}>
                    Increment
                </button>
                <button className="btn btn-danger" onClick={decrement}>
                    Decrement
                </button>
            </div>
        </div>
    );
}
export default App;
