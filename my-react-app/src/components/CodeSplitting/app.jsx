// Import React.
// Purpose:
// React provides lazy() and Suspense()
// for Code Splitting.
import { Suspense, lazy } from "react";
// Import Home normally.
// Purpose:
// Home is shown immediately
// when the application loads.
import Home from "./Home";
// Lazy load About.
// Purpose:
// React DOES NOT download
// "About" component immediately.
// React downloads "About" component only when it is needed.
const About = lazy(() =>
    import("./About")
);
function App() {
    return (
        <div>
            {/*
                Home loads immediately.
            */}
            <Home />
            {/*
                Suspense
                Purpose:
                Display a fallback UI
                while React downloads
                the About component.
            */}
            <Suspense
                fallback={<h2 className="text-dark">Loading...</h2>}
            >
                {/*
                    About is loaded
                    only when React
                    reaches this component.
                */}
                <About />
            </Suspense>
        </div>
    );
}

export default App;