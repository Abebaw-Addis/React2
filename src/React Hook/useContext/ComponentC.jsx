import React, {useContext} from "react";
import { UserContext } from "./UseContextReactHook";

function ComponentC(){

    const user = useContext(UserContext);
    return(<div className="box">
        <h2>ComponentC - Child Component</h2>
        <h4>Bye, {user}</h4>
    </div>);
}

export default ComponentC