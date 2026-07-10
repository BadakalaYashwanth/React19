// Import the Custom Hook.
//
// Purpose:
//
// Instead of writing
// counter logic again,
//
// reuse the logic
// from useCounter().
import useCounter from "../hooks/useCounter";



// Create the Counter component.
//
// Purpose:
//
// Display the counter
// on the screen and
// provide buttons
// to increase and
// decrease it.
function Counter() {

    // Call the Custom Hook.
    //
    // Purpose:
    //
    // Pass the initial value.
    //
    // TypeScript checks
    // that this is a number.
    //
    // The Hook returns:
    //
    // count
    // increment()
    // decrement()
    //
    // We use object destructuring
    // to extract them.
    const {

        count,

        increment,

        decrement

    } = useCounter(10);



    // Return the UI.
    //
    // React renders this
    // on the browser.
    return (

        <div>

            {/*

                Display the current
                counter value.

                Whenever count changes,

                React automatically
                updates this value.

            */}
            <h2 className="text-dark">

                {count}

            </h2>



            {/*

                Increment Button.

                Purpose:

                When clicked,

                React calls

                increment().

                increment()

                updates the state.

                State changes

                cause React to

                re-render.

            */}
            <button

                onClick={increment}

            >

                +

            </button>



            {/*

                Decrement Button.

                Purpose:

                When clicked,

                React calls

                decrement().

                decrement()

                updates the state.

                React then

                re-renders

                with the new value.

            */}
            <button

                onClick={decrement}

            >

                -

            </button>

        </div>

    );

}



// Export the component.
//
// Purpose:
//
// Allows App.tsx
// or another component
// to render Counter.
export default Counter;