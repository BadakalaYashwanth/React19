// Import React so JSX can be understood by React and converted into JavaScript.
import React from "react";

// Create a reusable functional component named Welcome.
// Components are the building blocks of every React application.
function Welcome() {

  // Return the UI that should appear on the screen.
  // JSX looks like HTML but is actually JavaScript syntax.
  return (

    // Display a heading inside the browser.
    // React converts this JSX into actual DOM elements.
    <>
      <h1>Hello, React!</h1>
      <p>React is Single page application</p>
    </>

  );
}

// Export the component so it can be imported and used in other files.
export default Welcome;