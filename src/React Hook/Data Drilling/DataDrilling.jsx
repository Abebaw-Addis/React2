import React, {useState} from "react";
import ComponentA from "./ComponentA";

function DataDrilling(){
    const[user, setUser] = useState("Abebaw Addis");
    return(<div className="box">
        <h2>Data Drilling - Parent Component</h2>
        <h4>Hello, {user}</h4>
        <ComponentA user={user}/>
    </div>);
}

export default DataDrilling