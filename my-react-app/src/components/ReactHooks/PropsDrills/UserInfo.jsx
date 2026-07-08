function UserInfo({

    user

}) {

    return (

        <div>

            {/*

                Finally,

                This component
                actually uses
                the user prop.

            */}
            <h2>Name : {user.name}</h2>

            <h3>Role : {user.role}</h3>

        </div>

    );

}

export default UserInfo;