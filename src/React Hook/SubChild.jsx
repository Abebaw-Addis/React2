import React, {useEffect} from "react";

let counter = 0;

function SubChild(){
    useEffect(() => {
        counter++;
    }, [])//Empty dependency eliminates incrementing the value by clicking the button after clicking once
    const stylying = {
        color: "black"
    }
    
    return(
        <div style={stylying}>
            Counter: {counter}
        </div>
    );

}

export default SubChild;