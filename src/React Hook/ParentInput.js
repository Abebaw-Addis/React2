import React, {useState, useEffect} from "react";
import "./Styles/hooks.css"

// function ParentInput(){
//     var cbRef1 = null
//     function setCbRef1(element){
//         cbRef1 = element
//         Callback()
//     }
//     function Callback(){
//         if(cbRef1){
//             cbRef1.focus()
//         }
//     }
//     useEffect(() => {
//         console.log("COMPONENT RENDERED");
//     }, []);

//     return(
//             <input type="text" style={{marginBottom: '10px', 
//                 width: '250px', height: '35px', borderRadius: '5px', textAlign: "center"
//             }} ref={setCbRef1}/>
//     );

// }

const ParentInput = React.forwardRef((props, ref) => {
    return(
        <input type="text" style={{marginBottom: '10px', 
            width: '250px', height: '35px', borderRadius: '5px', textAlign: "center"
        }} ref={ref}/>
);
})

export default ParentInput;