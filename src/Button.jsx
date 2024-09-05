import "./Styles/index.css"
import React, {useState} from "react";
import UseReducerHook from "./React Hook/UseReducerHook";

function Button(props){
   /* const display = () => console.log("Hello, Dear!");
    const displayParametrized = (name) => {
        count++;
        console.log(`Hello, ${name} you clicked ${count} times`); 
        let count = 0;
    }*/

const studInfo = [{subCode:'000', subName:'English', subResult: 82},
                {subCode:'001', subName:'Amharic', subResult: 80},
                {subCode:'002', subName:'Mathematics', subResult: 91},
                {subCode:'003', subName:'History', subResult: 83},
                {subCode:'004', subName:'Science', subResult: 86},
                {subCode:'005', subName:'Computer', subResult: 97}]  
            
        const [age, setAge] = useState(0);
        const Agei = () => {
            setAge(age+1);
            /*setAge(a => a+1);
            setAge(a => a+1);
            setAge(a => a+1);*/ //upDater function - it is a function passed as an argument to setState() usually
                            //updating is performed in each clicking with the number of calling a funtion
                            // used with multiple state updetes 
        }
        const Aged = () => {
            setAge(age-1);//if is duplicates many times and the button is clicked then no updatind for each clicking is done
        }
        const Ager = () => {
            setAge(0);
        }
        
        const [isElder, setIsElder] = useState(true);
        const ToggleStatus = () =>{
            setIsElder(!isElder);
        }

        const [fname, setName] = useState(props.userName);
        const [num, setIdNum] = useState(props.userPass);
        const [eduLevel, setEduLevel] = useState("Not Selected");
        const [nation, setNation] = useState("Not Selected");
        const [gender, setGender] = useState("None");
        const [image, setImage] = useState(null);
        const[video, setVideo] = useState(null);

        function nameChange(event){
            setName(event.target.value);
        }
        function cardNumChange(event){
            setIdNum(event.target.value);
        }
        function handleEduLevelChange(event){
            setEduLevel(event.target.value);
        }
        function handleNationalityChange(event){
            setNation(event.target.value);
        }
        function handleGenderChange(event){
            setGender(event.target.value);
        }
        function handleFileUploadChange(event){
            const file = event.target.files[0];
            if(file){
                const reader = new FileReader();
                reader.onloadend = () => {
                setImage(reader.result)
                };
                reader.readAsDataURL(file);
            }
        }

        function handleVideoUploadChange(event){
            const file = event.target.files[0];
            if(file){
                const reader = new FileReader();
                reader.onloadend = () => {
                setVideo(reader.result)
                };
                reader.readAsDataURL(file);
            }
        }

    const[studResult, setStudResult] = useState(false)
    let total = 0
    studInfo.forEach(e => {
        console.log('Subject',studInfo.indexOf(e)+1,'result:',e.subResult)
        total += e.subResult
        console.log(total)
    });
    function displayResult() {
        if(fname !== '' && eduLevel !== 'Not Selected' && num !== '' && 
            nation !== 'Not Selected' && gender !== 'None'){
            setStudResult(true)
        }
    }
    const avg = total/(studInfo.length)

    return(
        <>
        <div className="textfield">
        <form action="#" name="form">
            <div className="file">
                <label className="image-input"> <input type="file" accept="vedio/*" capture="environment"
                onChange={handleFileUploadChange}/> < span className="image-upload-input">⇬</span>
                </label>
                <img className="uploaded-image" src={image}/>
            </div>
            <label htmlFor="userName"> <span className="color">First Name:</span> <input type="text" value={fname} 
            id="userName" onChange={nameChange}></input></label>
            <p className="input-check-up"> First Name: {fname}</p> <br />
            <label htmlFor="userId"> <span className="color">Admission :</span> <input type="number" value={num} 
            id="userId" onChange={cardNumChange}></input> </label>
            <p className="input-check-up"> Admission Number: {num}</p> <br />

            <div className="gender-radio-button"> <span className="color">Select Gender: </span>
            <label id="male">
            <input type="radio" value="Male" onChange={handleGenderChange} 
            checked={gender === "Male"} className="gender"/> Male </label>
            <label id="female">
            <input type="radio" value="Female" onChange={handleGenderChange} 
            checked={gender === "Female"} className="gender"/> Female </label>
            </div><br/>
            <p>Selected Gender: {gender}</p><br />
            <select value={eduLevel} onChange={handleEduLevelChange}>
                <option value="">Select Your Education Level</option>
                <option value="Professor">Professor</option>
                <option value="PhD.">PhD.</option>
                <option value="Msc.">Msc.</option>
                <option value="Degree">Degree</option>
                <option value="Dep">Dep</option>
                <option value="Heighr Level Student">Heighr Level Student</option>
                <option value="Secondary School Student">Secondary School Student</option>
                <option value="Primary School Student">Primary School Student</option>
                </select>  <br /><br />
            <p>Education Level: {eduLevel}</p> <br />
            <select value={nation} onChange={handleNationalityChange}>
                <option value="">Select Your Nationality</option>
                <option value="Ethiopian">Ethiopian</option>
                <option value="USA">USA</option>
                <option value="Chinese">Chinese</option>
                <option value="South African">South African</option>
                <option value="Egiptian">Egiptian</option>
                <option value="Russian">Russian</option>
                <option value="Eritrean">Eritrean</option>
                <option value="Italian">Italian</option>
                <option value="Kenayan">Kenayan</option>
                </select>  <br /><br />
            <p>Nationality: {nation}</p> <br />
            {/* <button style={button} onClick={() => displayParametrized("Abebaw")}>Check Result</button> */}
           <button className="button" onClick={displayResult}>Check Result</button>
        </form>
        </div>
    {studResult && <><div>
        <div className="studentResult">
            <div className="stud-photo"> <img className="stud-photo" src={image}/></div>
            <div className="student-result-info">
            <p> Nationality: <span>{nation}</span></p>
            <p> Name: <span>{fname}</span></p>
            <p> Gender: <span>{gender}</span></p>
            <p> Level : <span>{eduLevel}</span></p>
            <p> Admmision Card : <span>{num}</span></p>
            <p>Total: <span>{total}</span> out of 600</p>
            <p>Average: <span>{avg}</span>%.</p></div>
        </div>
    </div>
        <table>
            <tbody>
                <tr>
                    <th>SubjectCode</th>
                    <th>Subject</th>
                    <th>SubjectResult</th>
                </tr>
                    {studInfo.map((stud) => 
                <tr key={stud.subCode}>
                    <td>{stud.subCode}</td> 
                    <td>{stud.subName}</td> 
                    <td>{stud.subResult}</td>
                </tr>)}
            </tbody>
        </table> </>}
        <div className="button-container">
            <pre>Age: {age}  Elder: {isElder ? "Yes" : "No"}</pre> <br />
            <label>
            <div className="Button">
            <button className="button increment-button" onClick={Agei}>+</button>
            <button className="button decrement-button" onClick={Aged}>-</button>
            <button className="button zero-button" onClick={Ager}>0</button>
            <button className="button toggle-button" onClick={ToggleStatus}>Toggle Status</button> </div>
            <UseReducerHook />
            </label>
        </div>
        </>
    );
}

export default Button;