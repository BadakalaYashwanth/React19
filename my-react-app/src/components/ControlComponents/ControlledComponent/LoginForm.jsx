import { useState } from "react";


function LoginForm() {
    const [name, setName] = useState("")


    return (


        <div>

            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
            />

            <h2 className="text-dark">{name}</h2>

        </div>
    )
}

export default LoginForm