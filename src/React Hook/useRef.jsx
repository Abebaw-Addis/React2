// useRef - use Reference doesn't cause re-renders when its value changes.
// 1. Accessing/Interacting with DOM elements 
// 2. Handling Focus, Animations, and Transitions 
// 3. Managing Timers and Intervals
import React, {useState, useEffect, useRef} from "react";
import "./Styles/hooks.css"

function UseRef(){
    const buttonRef1 = useRef("Abebaw Addis");//buttonRef is user defined object
    const buttonRef2 = useRef("Abebaw Addis");
    const buttonRef3 = useRef("Abebaw Addis");
    console.log(buttonRef1);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    }, []);

    function handleClick1(){
        // buttonRef.current ++;
        // console.log(buttonRef.current);
        buttonRef1.current.focus();
        buttonRef1.current.style.backgroundColor = "gray";
        buttonRef3.current.style.backgroundColor = "";
        buttonRef2.current.style.backgroundColor = "";
        buttonRef1.current.style.color = "aqua";
        buttonRef1.current.style.textAlign = "center";
        buttonRef1.current.style.width = "200px";
        buttonRef3.current.style.color = "";
        buttonRef3.current.style.width = "";
        buttonRef3.current.style.textAlign = "";
        buttonRef2.current.style.color = "";
        buttonRef2.current.style.width = "";
        buttonRef2.current.style.textAlign = "";
    }
    function handleClick2(){
        buttonRef2.current.focus();
        buttonRef2.current.style.backgroundColor = "black";
        buttonRef1.current.style.backgroundColor = "";
        buttonRef3.current.style.backgroundColor = "";
        buttonRef2.current.style.color = "white";
        buttonRef2.current.style.width = "150px";
        buttonRef2.current.style.textAlign = "center";
        buttonRef1.current.style.color = "";
        buttonRef1.current.style.width = "";
        buttonRef1.current.style.textAlign = "";
        buttonRef3.current.style.color = "";
        buttonRef3.current.style.width = "";
        buttonRef3.current.style.textAlign = "";
    }
    function handleClick3(){
        buttonRef3.current.focus();
        buttonRef3.current.style.backgroundColor = "yellow";
        buttonRef1.current.style.backgroundColor = "";
        buttonRef2.current.style.backgroundColor = "";
        buttonRef3.current.style.color = "red";
        buttonRef3.current.style.width = "250px";
        buttonRef3.current.style.textAlign = "center";
        buttonRef1.current.style.color = "";
        buttonRef1.current.style.width = "";
        buttonRef1.current.style.textAlign = "";
        buttonRef2.current.style.color = "";
        buttonRef2.current.style.width = "";
        buttonRef2.current.style.textAlign = "";
    }

    return(
        <div  className="style1">
            <button onClick={handleClick1} className="styles">
                Click me1!
            </button>
            <input ref={buttonRef1} className="styles1"/>
            <button onClick={handleClick2} className="styles">
                Click me2!
            </button>
            <input ref={buttonRef2} className="styles1"/>
            <button onClick={handleClick3} className="styles">
                Click me3!
            </button>
            <input ref={buttonRef3} className="styles1"/>
        </div>
    );

}

export default UseRef;