import React, {useState} from "react";
import "./Styles/array.css"

function MultipleuseStateArgu(){

    const [car, setCar] = useState({year: 2024, 
                                    model: "BWM", 
                                    make: "Chervelot"});

    function setYear(event){
        setCar({...car, year:event.target.value});
    }
    function setModel(event){
        setCar({...car, model:event.target.value});
    }
    function setMake(event){
        setCar({...car, make:event.target.value});
    }

    const [foods, setFood] = useState(["Banana", "Orange", "Apple"]);
    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFood(f => [...f,newFood]);
    }
    function handleRemoveFood(index){
        setFood(foods.filter((_, i) => i !== index));

    }

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");


    function handleAddCar(){
        const newCar = {y: carYear,
            ma: carMake,
            mo: carModel};
        if(carModel.trim() !== "" && carMake.trim() !== ""){
            setCars(c => [...c, newCar]);
            setCarYear(new Date().getFullYear());
            setCarModel("");
            setCarMake("");
        }
    
    }
    function handleRemoveCar(index){
        setCars(c => c.filter((_, i) => i!==index));
    }
    
    return(
        <>
        <div className="car-selection-container">
        <h2>Set your's car year, model and make!</h2>
        <label>Year: <input type="number" value={car.year} onChange={setYear}/></label><br />
        <label>Model: <input type="text" value={car.model} onChange={setModel}/> </label><br />
        <label>Make: <input type="text" value={car.make} onChange={setMake}/></label>
        <p>Your Favorite Car is produced in {car.year} model {car.model} make {car.make} </p>
        </div>

                {/* Favorite food lists */}
        <div className="array-lists">
            <h2>List of Favorite Foods</h2>
            <ol>
                {foods.map((food, index) => 
                <li key={index} onClick={() => handleRemoveFood(index)}> {food}</li>)}
            </ol>
            <input type="text" id="foodInput" placeholder="Enter Your Favorite Food" />
            <button onClick={handleAddFood}>Add Food</button>
        </div>

                {/* Favorite car lists in table form */}
                <div className="array-car-lists">
            <h2>List of Car Objects With Their Property</h2>
                <React.Fragment>
                    <table>
                        <tbody>
                        <tr>
                        <th>Year</th>
                        <th>Make</th>
                        <th>Model</th>
                        </tr>
                        {cars.map((car, index) => 
                        <tr key={index} onClick={() => handleRemoveCar(index)}>
                            <td>{car.y}</td> 
                            <td>{car.ma}</td> 
                            <td>{car.mo}</td>
                            
                        </tr>)}
                        </tbody>
                
                </table>
                </React.Fragment>
            {/* <ol>
                {cars.map((car, index) => 
                <li key={index} onClick={() => handleRemoveCar(index)}>
                   Produced in {car.y} make of {car.ma} model {car.mo} </li>)}
            </ol> */}
    <input type="number" onChange={(e) => setCarYear(e.target.value)} value={carYear}/>
    <input type="text" onChange={(e) => setCarMake(e.target.value)}  value={carMake} placeholder="Car make" />
    <input type="text" onChange={(e) => setCarModel(e.target.value)} value={carModel} placeholder="Car model" />
    <button onClick={handleAddCar}>Add Car</button>
    </div>
        </>
    );
}

export default MultipleuseStateArgu;