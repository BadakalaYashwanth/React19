import Profile from "./Profile";

function Dashboard() {

    // Notice:
    //
    // We do NOT receive
    // user as a prop.
    //
    // We simply render
    // the next component.
    return (

        <Profile />

    );

}

export default Dashboard;