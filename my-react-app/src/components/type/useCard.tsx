interface UserCardProps {
    name: string,
    age: number,
    isActive: boolean
}
function UserCard({
    name,
    age,
    isActive

}: UserCardProps) {
    return (
        <div>
            <h2 className="text-dark">{name}</h2>
            <p>Age: {age}</p>
            <p>
                {isActive
                    ? "Active"
                    : "InActive"
                }
            </p>
        </div>
    )
}

export default UserCard;