// Import Dashboard.
// Purpose:
// Dashboard is the first child component.
import Dashboard from "./Dashboard";
function App() {
    // Create the user object.
    // Normally this data comes
    // from an API.
    const user = {
        name: "Yaswanth",
        role: "Software Engineer"
    };
    return (
        <div>
            {/*
                Pass user to Dashboard.
                Notice:
                Dashboard does NOT use user.
                It only forwards it.
            */}
            <Dashboard user={user} />
        </div>
    );
}

export default App;