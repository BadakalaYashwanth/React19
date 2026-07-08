// Import Profile.
import Profile from "./Profile";
function Dashboard({
    user
}) {
    return (
        <div>
            <h2>Dashboard</h2>
            {/*
                Dashboard does NOT use user.
                It simply forwards
                the prop to Profile.
                This is Prop Drilling.
            */}
            <Profile user={user} />
        </div>
    );
}
export default Dashboard;