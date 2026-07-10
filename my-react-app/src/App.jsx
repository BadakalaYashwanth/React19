import useCounter from "./components/type/CustomHook/useCounter";
import UnionTypesApp from "./components/type/UnionTypes/App";
import UnionTypesExampleApp from "./components/type/UnionTypes/Example/App";

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
            
            <hr className="w-100" />
            
            <h3>Union Types Buttons</h3>
            <UnionTypesApp />
            
            <hr className="w-100" />
            
            <h3>Union Types User Example</h3>
            <UnionTypesExampleApp />
        </div>
    );
}
export default App;
