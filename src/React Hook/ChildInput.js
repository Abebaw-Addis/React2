import React, {useState, useEffect} from "react";
import "./Styles/hooks.css"
import ParentInput from "./ParentInput";

function ChildInput(){

    var cbRef2 = null
    function setCbRef2(element){
        cbRef2 = element
        CallbackChecker1()
    }

    function CallbackChecker1(){
        if(cbRef2){
            cbRef2.focus()
        }
    }
    useEffect(() => {
        console.log("COMPONENT RENDERED");
    }, []);

    function handleClick(){
        alert(cbRef2.value)
    }

    return(
        <div  className="style1"> 
            <ParentInput ref={setCbRef2}/>
            <button className="button"
                onClick={handleClick}>Click</button>
        </div>
    );

}

export default ChildInput;