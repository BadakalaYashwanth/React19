# React 19 & TypeScript Reference Project

A comprehensive reference and tutorial playground demonstrating modern **React 19** features, React Hooks, design patterns, form handling, and **TypeScript** integration.

---

## 🛠️ Tech Stack & Dependencies

* **Core**: [React 19](https://react.dev/) & [React DOM 19](https://react.dev/)
* **Build Tool**: [Vite 8](https://vite.dev/) (fast ESM-based bundling)
* **Styling**: [Bootstrap 5](https://getbootstrap.com/) for quick, clean, and responsive UI components
* **Languages**: JavaScript (JSX) & TypeScript (TSX)

---

## 📂 Project Directory Structure

Here is a breakdown of the key educational modules located under `src/components/`:

### 1. React Basics & Common Concepts
* **`ReactComponenets.jsx`**: Introduction to Functional Components and structure.
* **`JSX.jsx`**: Syntax and dynamic expression rendering.
* **`props.jsx`** & **`userCard.jsx`**: Passing data between components using read-only properties.
* **`ReactList.jsx`**: Rendering arrays using map and list keys.

### 2. State & Data Flow
* **`LiftingStateUp/`**: Demonstrates sharing state between sibling components (e.g., passing query updates from `SearchBox` to update filters in `ProductList`).
* **`ControlComponents/`**:
  * **Controlled Components**: Binding form input values to React state.
  * **Uncontrolled Components**: Interacting with inputs using `useRef` and DOM elements.

### 3. Forms & Validation
* **`ReactForm.jsx`** & **`handleValidation.jsx`**: Traditional React form submission, control, and client-side validations.
* **`ModernReactForm/`**: Modern React 19 Form action handlers (e.g., using transition actions and forms with server/async logic).

### 4. Advanced React Patterns
* **`ContextAPI/`**: Global state management without prop drilling (Context Provider, Consumers, and context hook integration).
* **`CodeSplitting/`**: Lazy loading views using `React.lazy()` and `Suspense` for bundle optimization.
* **`FetchAPI/`**: Handling API integration, network states, and rendering data from external endpoints.

### 5. React Hooks (`ReactHooks/`)
Deep dives and examples for both standard and modern React hooks:
* **`useState/`**: Managing component-level state variables.
* **`useEffects/`**: Syncing with external systems, side-effects, dependency array rules, cleanup functions, and digital clocks.
* **`useMemo.jsx`** & **`useCallback.jsx`**: Optimizing performance with computed values caching and function reference memoization.
* **`useReducer.jsx`**: Managing complex state updates using action-based reducers.
* **`useTransition.jsx`** & **`useDeferredValue.jsx`**: Prioritizing UI updates to maintain UI responsiveness during heavy rendering or slow fetches.
* **`CustomHook/`**: Creating reusable stateful logic blocks (like `useCounter`).

### 6. TypeScript Integration (`type/`)
TypeScript implementations showing how to strong-type React apps:
* **`UnionTypes/`**: Defining props that accept multiple selected types (e.g., `id: string | number` or button colors restricted to `"red" | "green" | "blue" | "yellow"`).
* **`CustomHook/`**: Strong-typing custom hook inputs and outputs in TypeScript (`.tsx`).

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### 2. Installation
Clone the repository, navigate into the project directory, and install the dependencies:
```bash
npm install
```

### 3. Running Locally
Start the development server:
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser to view the application.

### 4. Build for Production
To bundle and optimize the application for deployment:
```bash
npm run build
```

---

## 💡 How to Test and Run Specific Examples

To test any specific module or component, import it into the root [App.jsx](file:///c:/Users/ASUS/OneDrive/Desktop/ReactJS/my-react-app/src/App.jsx) file and render it.

For example, to run the **Union Types Example**:
```jsx
// Import the component inside src/App.jsx:
import UnionTypesExampleApp from "./components/type/UnionTypes/Example/App";

function App() {
    return (
        <div className="container p-4">
            <h2>Testing Union Types:</h2>
            <UnionTypesExampleApp />
        </div>
    );
}

export default App;
```
The dev server will automatically hot-reload the UI.
