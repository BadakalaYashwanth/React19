// Import UserInfo.
import UserInfo from "./UserInfo";
function Profile({
    user
}) {
    return (
        <div>
            <h2>Profile</h2>
            {/*
                Profile also does NOT
                use user.
                It forwards the prop
                to UserInfo.
                This is still
                Prop Drilling.
            */}
            <UserInfo user={user} />
        </div>
    );
}
export default Profile;