import { useMemo, useState } from "react";


function Dashboard() {
    const [search, setSearch] = useState("");
    const sales = useMemo(() => [1200, 1900, 2880, 2388, 2000, 2342, 2000, 5444, 3334, 2211, 4433], [])


    const totalSales = useMemo(() => {
        console.log("Calculating Total Sales")
        return sales.reduce((total, amount) => total + amount, 0)

    }, [sales])

    return (
        <div>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <h2 className="text-dark">Total Sales: {totalSales}</h2>
        </div>
    )
}

export default Dashboard;