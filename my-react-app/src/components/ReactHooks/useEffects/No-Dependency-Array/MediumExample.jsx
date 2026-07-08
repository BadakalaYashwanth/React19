import { useEffect, useState } from "react";

function Naming() {

    const [user, setUser] = useState("");

    useEffect(() => {

        console.log("Fetching User...");

        const timer = setTimeout(() => {
            setUser("Yaswanth");
        }, 4000);

        return () => clearTimeout(timer);

    }, []);

    return (

        <div>
            <p>Name : {user}</p>
        </div>


    );

}

export default Naming;