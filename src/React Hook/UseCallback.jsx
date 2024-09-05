import React, {useState, useCallback} from "react";
import Button from "./Button";
import Counter from "./Counter";
import "./Styles/hooks.css"

function UseCallback(){
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const increment1 = useCallback(() => {
        setCount1(count1 + 1);
    }, [count1]);
    const increment2 = useCallback(() => {
        setCount2(count2 + 2);
    }, [count2]);

    // function increment1(){
    //     setCount1(count1 + 1);
    // }
    // function increment2(){
    //     setCount2(count2 + 2);
    // }

    const stylying = {
        color: "black"
    }

    return(
        <div className="style1" style={stylying}>
            <h3>useCallback React Hook</h3>
                <Counter text="Count by 1: " count={count1}></Counter>
                <Button handleClick={increment1}>+1</Button>
                <Counter text="Count by 2: "count={count2}></Counter>
                <Button handleClick={increment2}>+2</Button>
            </div>
    );
}

export  default UseCallback;