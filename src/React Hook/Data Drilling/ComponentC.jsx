import React, {useState} from "react";

function ComponentC(props){

    return(<div className="box">
        <h2>ComponentC - Child Component</h2>
        <h4>Bye, {props.user}</h4>
    </div>);
}

export default ComponentC