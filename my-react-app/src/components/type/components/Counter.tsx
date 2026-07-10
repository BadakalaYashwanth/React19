// Import the Custom Hook.
import useCounter from "../hooks/useCounter";

function Counter() {

    // Pass a number.
    //
    // Correct.
    const {

        count,

        increment,

        decrement

    } = useCounter(10);

    return (

        <div>

            <h2>{count}</h2>

            <button onClick={increment}>

                +

            </button>

            <button onClick={decrement}>

                -

            </button>

        </div>

    );

}

export default Counter;