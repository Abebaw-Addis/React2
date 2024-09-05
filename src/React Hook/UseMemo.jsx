import React, {useState, useMemo} from "react";
import SubChild from "./SubChild";
import "./Styles/hooks.css"

function UseMemo(){
    const [count, setCount] = useState(0);

    // const increment = useCallback(() => {
    //     setCount(count + 1);
    // }, [count]);

    function increment(){
        setCount(count + 1);
    }

    const subChildMemo = useMemo(() => {
            return <SubChild></SubChild>
    }, []);//Empty dependency eliminates incrementing the value by clicking the button

    const stylying = {
        color: "black"
    }
    return(
        <div className="style1">
            <h2 style={stylying}>useMemo React Hook</h2>
            <h2 style={stylying}>Counter: {count}</h2>
            <button className="styles" onClick={increment}>Increment</button>
            {/* <SubChild /> */}
            {subChildMemo}
            </div>
    );
}

export  default UseMemo;