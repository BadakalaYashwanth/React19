import User from "./User";

function App() {
    return (
        <div>
            <User id="123" />
            <User id={123} />
        </div>
    );
}

export default App;