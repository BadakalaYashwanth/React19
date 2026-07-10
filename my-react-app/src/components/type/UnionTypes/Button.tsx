interface ButtonProps {
    color: "red" | "green" | "blue" | "yellow";
}

function Button({ color }: ButtonProps) {
    return (

        <button>Button Color: {color}</button>
    )
}

export default Button;