
import React, {useState, useEffect} from 'react'
import "./Styles/index1.css"

function ToDoList(){
    const[todoLists, setTodoLists] = useState([{task:"Praying", completed:false}, 
        {task:"Reading", completed:false}, {task:"Taking Rest", completed:false}]);
    const[newTask, setNewTask] = useState("");
    const[editIndex, setEditIndex] = useState(-1);
    const tasks = todoLists.map(t  => t.task.toLowerCase())
    const duplicate = tasks.includes(newTask.toLowerCase())
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    // window.addEventListener("resize", handleWindowResize);
    // console.log("Event Listner Added");//with out useEffect React Hook

useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    console.log("Event Listner Added");

    return() => {
        window.removeEventListener("resize", handleWindowResize);
        console.log("Event Listner Removed")
    }
}, []);//with useEffect function and dependency advantageous of returning another statements

function handleWindowResize(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    }

function addTask(){
    if(newTask.trim() !== ""){
        if(!duplicate){
        setTodoLists([...todoLists, {task: newTask, completed: false}])
        setNewTask("");}
    }
}

function deleteTask(index){
    const updatedTaskList = todoLists.filter((_, i) => i!==index);
    setTodoLists(updatedTaskList);
    }
function moveDownTask(index){
    if(index < todoLists.length - 1 ){
        const updatedTask = [...todoLists];
        [updatedTask[index], updatedTask[index + 1]] = 
        [updatedTask[index + 1], updatedTask[index]];
        setTodoLists(updatedTask);
        }       
    }
function moveUpTask(index){
    if(index >0 ){
        const updatedTask = [...todoLists];
        [updatedTask[index], updatedTask[index - 1]] = 
        [updatedTask[index - 1], updatedTask[index]];
        setTodoLists(updatedTask);
    }
}

function undoTask(){
    setNewTask("")
    setEditIndex(-1) 
}
function editTask(index){
    setEditIndex(index)
    setNewTask(todoLists[index].task)
}
function updateTask(){
    if(newTask.trim() !== ""){
        if(!duplicate){
            const updateTodos = [...todoLists]
            updateTodos[editIndex] = {task: newTask, completed: updateTodos[editIndex].completed} 
            setTodoLists(updateTodos)
            setNewTask("");
            setEditIndex(-1)
            }
        }
    }
function checkTask(index){
    const updatedTask = [...todoLists];
    updatedTask[index].completed = !updatedTask[index].completed
    setTodoLists(updatedTask);
}

const [count, setCount] = useState(0);
const[color, setColor] = useState("white");
    
    // useEffect(
    //     () => {
    //         document.title = `Count: ${count} ${color}`;
    //     }, [count, color]//useEffect with function and dependency value

    //     // () => {
    //     //     document.title = `Count: ${count}`;
    //     // }//useEffect with no dependency

    //     // () => {
    //     //         document.title = `Count: ${count}`;
    //     //     }, []
    // );// function, [dependencies]->no dependency, [], [value]. //function only = function, []

    return(<div className="to-do-list">
            <h1>Lists What I do</h1>
            <div className="todo-list-input">
            <input type="text" className="input-field" value={newTask} 
            onChange={(event) => setNewTask(event.target.value)}
            placeholder="Enter a new task" />{
                editIndex !== -1 ? (
                <><button onClick={updateTask} className="update-button">✔️</button> 
                <span style={{color: duplicate ? 'red': 'green', fontWeight:'bold'}}>
                {duplicate ? 'Duplicated' : 'Right'} </span>
                <button onClick={undoTask} className="undo-button">↶</button></>
                ) : (<button onClick={addTask} className="add-button">Add</button>)}</div>

            <ul className='todos'>
                {todoLists.map((list, index) =>(
                       <li key={index} className={list.completed ? 'completed' : ''}> 
                       {list.task}
                    <div><button onClick={() => deleteTask(index)} 
                    className="delete-button" ><img src="Images/trash.svg" alt="❌" /></button>
                    <button onClick={() => editTask(index)} 
                    className="edit-button" ><div><img src="Images/pencil-square.svg" alt="" /></div></button>
                    <button onClick={() => moveUpTask(index)} 
                    className="moveup-button" >👆</button> 
                    <button onClick={() => moveDownTask(index)} 
                    className="movedown-button">👇</button>
                        <button onClick={() => checkTask(index)}  
                    className="check-button" >
                    <div>{list.completed ? <img src="Images/check-circle-fill.svg"/> : '⨵'}</div>
                       </button></div>
                   </li>)
                )}
            </ul>
            <div style={{border: '2px solid', padding: '20px', margin: '20px 5px'}}>
                <p style={{color: color, fontSize: '20px'}}>Count: {count} <br />
                    Window Width: {width}px <br />Window Height: {height}px</p><br />
                <button onClick={() => setCount(c => c + 1)} className='button'>Add</button>
                <button onClick={() => setColor(c => c === "white" ? "red" : "white")} 
                className='button'>Change Color</button></div>
            </div>
    );

}

export default ToDoList;