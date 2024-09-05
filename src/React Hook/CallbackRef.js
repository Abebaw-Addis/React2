import React, {useState, useEffect} from "react";
import "./Styles/hooks.css"

function CallbackRef(){
    var cbRef = null

    function setCbRef(element){
        cbRef = element
        CallbackChecker()
    }

    function CallbackChecker(){
        if(cbRef){
            cbRef.focus()
        }
    }
    useEffect(() => {
        console.log("COMPONENT RENDERED");
    }, []);

    function handleClick(){
        alert(cbRef.value)
    }

    return(
        <div  className="style1">
            <input type="text" ref={setCbRef} style={{marginBottom: '10px', 
                width: '250px', height: '35px', borderRadius: '5px', textAlign: "center"
            }}/>
            <button className="button"
                onClick={handleClick}>Click</button>
        </div>
    );

}

export default CallbackRef;