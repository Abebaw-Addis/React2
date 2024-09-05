import React, { useState, createContext } from "react";
import ComponentA from "./ComponentA";

export const UserContext = createContext();

function UseContextReactHook(){
    const[user, setUser] = useState("Abebaw Addis");
    return(<div className="box">
        <h2>useContext React Hook - Parent Component</h2>
        <h4>Hello, {user}</h4>
        <UserContext.Provider value={user}>
            <ComponentA user={user}/>
        </UserContext.Provider>
    </div>);
}

export default UseContextReactHook