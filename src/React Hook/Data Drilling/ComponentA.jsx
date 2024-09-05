import React, {useState} from "react";
import ComponentB from "./ComponentB";

function ComponentA(props){

    return(<div className="box">
        <h2>ComponentA - Child Component</h2>
        <ComponentB user={props.user}/>
    </div>);
}

export default ComponentA