import React, {useContext} from "react";
import { UserContext } from "./UseContextReactHook";
import ComponentB from "./ComponentB";

function ComponentA(){
    const user = useContext(UserContext);
    return(<div className="box">
        <h2>ComponentA - Child Component</h2>
        <h4>Hello again, {user}</h4>
        <ComponentB />
    </div>);
}

export default ComponentA