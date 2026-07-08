import { useState } from "react";


function LightSwitch() {
    const [isOn, setIsOn] = useState(false);

    function toggleSwitch() {
        setIsOn(!isOn)
    }
    return (
        <div>
            <h2>
                {isOn ? "Light On" : "Light Off"}
            </h2>
            <button onClick={toggleSwitch}>
                toggle
            </button>
        </div>
    )
}
export default LightSwitch;