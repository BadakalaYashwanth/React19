import Search from "./components/ReactHooks/useDeferredValue"
import PropsDrillsApp from "./components/ReactHooks/PropsDrills/app"

function App() {

    return (
        <div className="d-flex flex-column gap-4 p-4">
            <Search />
            <PropsDrillsApp />
        </div>
    )
}
export default App;
