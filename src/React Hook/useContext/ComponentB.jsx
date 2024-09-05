import React, {useContext} from "react";
import ComponentC from "./ComponentC";
import { UserContext } from "./UseContextReactHook";

function ComponentB(){
    const user = useContext(UserContext);
    return(<div className="box">
        <h2>ComponentB - Child Component</h2>
        <h4>Hello, {user} again</h4>
        <ComponentC />
    </div>);
}

export default ComponentB