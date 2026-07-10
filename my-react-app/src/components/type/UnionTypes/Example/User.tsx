interface UserProps {

    // id can be either
    // a number or a string.
    id: number | string;

}

function User({ id }: UserProps) {

    return (

        <h2>User ID: {id}</h2>

    );

}

export default User;