import { createContext } from "react";

// Create Context.
//
// Purpose:
//
// Create a shared storage
// that any component can use.
//
// Initially,
// the context has no value.
//
// The value will be provided
// later using Provider.
const UserContext = createContext();



// Export the Context.
//
// Other components
// can import it.
export default UserContext;