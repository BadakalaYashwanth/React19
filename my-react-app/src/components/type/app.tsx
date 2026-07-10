import UserCard from "./useCard";
import Counter from "./components/Counter";

function App() {
    return (
        <div className="d-flex flex-column gap-3">
            <UserCard

                name="Yashwanth"
                age={23}
                isActive={true}
            />
            <Counter />
        </div>
    );
}

export default App;