# TypeScript Union Types Example

This example demonstrates how to use **Union Types** in React props using TypeScript.

## Overview

In TypeScript, a **Union Type** allows a variable or a prop to hold values of multiple different types. This is denoted by the pipe (`|`) symbol.

In this component example, the `User` component accepts an `id` prop which can be either a `string` or a `number`.

---

## Code Breakdown

### 1. Defining the Union Type Prop in `User.tsx`

In `User.tsx`, we define the `UserProps` interface with a union type for `id`:

```tsx
interface UserProps {
    // The 'id' prop can accept either a number OR a string.
    id: number | string;
}

function User({ id }: UserProps) {
    return (
        <h2>User ID: {id}</h2>
    );
}

export default User;
```

### 2. Using the Component in `App.tsx`

Because of the union type definition, both of the following usages are completely valid and compile without any TypeScript errors:

```tsx
import User from "./User";

function App() {
    return (
        <div>
            {/* Passing a string ID is valid */}
            <User id="123" />
            
            {/* Passing a number ID is also valid */}
            <User id={123} />
        </div>
    );
}

export default App;
```

---

## Why Use Union Types?

- **Flexibility**: Useful when dealing with APIs that might return numeric IDs or string hashes/UUIDs.
- **Type Safety**: Limits the acceptable types to only the specified union (e.g., passing a boolean like `id={true}` would trigger a compile-time TypeScript error).
- **Auto-completion**: Code editors will recognize both string and number methods depending on how you refine (type guard) the values inside the component.
