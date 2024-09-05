import React, {useState} from "react"

function ColorPicker(){

    const [color, setColor] = useState();
    function handleColorChange(event){
        setColor(event.target.value);
    }

    const styles = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "3px solid hsl(0, 0%, 90%)",
        borderRadius: "5px",
        margin: "10px",
      
      }
    return(
        <div className="color-picker-container" style={styles}>
        <h1>Color Picker Program </h1>
        <div className="selectedColor" style={{backgroundColor: color}}>
        <p>Selected Color: {color} </p>
        </div>
        <label>Select a Color</label>
        <input type="color" value={color} onChange={handleColorChange} />
        </div>
    );
}

export default ColorPicker;