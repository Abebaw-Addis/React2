import React from "react";

function Counter({text, count}){
    console.log("Rendering Counter "+count);

    return(
            <p className="styles1">{text} {count}</p>
    );
}

export  default React.memo(Counter);
// export  default Counter;
