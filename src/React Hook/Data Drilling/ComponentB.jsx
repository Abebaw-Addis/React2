import React, {useState} from "react";
import ComponentC from "./ComponentC";

function ComponentB(props){

    return(<div className="box">
        <h2>ComponentB - Child Component</h2>
        <ComponentC user={props.user}/>
    </div>);
}

export default ComponentB