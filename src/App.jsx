import React, { useState } from "react";
import "./Styles/style.css";
import Index from "./Index.jsx"
import Footer from "./Footer.jsx"
import FormData from "./FormData.jsx"
import List from "./myWork.jsx";
import Button from "./Button.jsx";
import ColorPicker from "./ColorPicker.jsx";
import MultipleuseStateArgu from "./MultipleuseStateArgu.jsx";
import DigitalClock from "./DigitalClock.jsx";
import ToDoList from "./ToDoList.jsx";
import UseRef from "./React Hook/useRef.jsx";
import Stopwatch from "./Stopwatch.jsx";
import UseCallback from "./React Hook/UseCallback.jsx";
import UseMemo from "./React Hook/UseMemo.jsx";
import StateInClassComponent from "./StateInClassCompenent.jsx";
import HandlerBinding from "./HandlerBinding.js";
import ParentComponent from "./Methods as props/ParentComponent.js";
import LifecycleA from "./RCC_Lifecycle_methods/Mounting Phase/LifecycleA.js";
import LifecycleC from "./RCC_Lifecycle_methods/Updating Phase/LifecycleC.js";
import Parent from "./React Components/Parent.js";
import Comp from "./RCC_Lifecycle_methods/Error Phase/Comp.jsx";
import ErrorBoundary from "./RCC_Lifecycle_methods/Error Phase/ErrorBoundary.jsx";
import Contact from "./Contact.jsx";
import Skill from "./Skill.jsx";
import AddItemWithButton from "./AddItemWithButton.jsx";
import ReactHook from "./ReactHook.jsx";
import Header from "./Header.jsx";
import Box from "./Box.jsx";
import PostList from "./PostList.jsx";
import Posts from "./Posts.jsx";
import SignUp from "./SignUp.js";

function App(props) {
    const FrameWorks = [ {id: 1, name: "Web Developmtnt", skill: <span>70%</span>}, 
                      {id: 2, name: "Java", skill: <span>55%</span>}, 
                      {id: 3, name: "C++", skill: <span>75%</span>}, 
                      {id: 4, name: "DSA", skill: <span>80%</span>},
                      {id: 5, name: "Networking", skill: <span>50%</span>}];

    const Libraries = [ {id: 6, name: "React js", skill: <span>10%</span>},
                        {id: 7, name: "Python", skill: <span>60%</span>},
                        {id: 8, name: "Angular js", skill: <span>0%</span>},
                        {id: 9, name: "Ajax", skill: <span>0%</span>}];

    const[imgPaused, setImgPaused] = useState(true)
    function handleImagePaused(){
        setImgPaused(!imgPaused)
    }

return (
    <>
<Header userName={props.userName}/>
<Index userName={props.userName} userAge={21} site="www.abebawsite.com" loggedIn={true}>
  <p>Children Component</p>
</Index >
{/* <Index></Index> */}
<div className={imgPaused && 'logo'} onClick={handleImagePaused}>
<img  src="Images/logo.svg" alt="React" />
</div>
<SignUp/>
<div id="Button">
<Button userName={props.userName} userPass={props.userPass}/></div>
<ColorPicker />
<div id="React-Array">
<MultipleuseStateArgu /> </div>
<div id="ToDo-List">
<ToDoList/></div>
<div className="myWorks">
  <List Lists= {FrameWorks} category="FrameWorks"></List>
  <List Lists= {Libraries} category="Libraries"></List>
</div>
<div id="React-Hook">
<ReactHook /> </div>
<DigitalClock />
<Stopwatch />
<UseRef />
<UseCallback />
<UseMemo />
<StateInClassComponent addBy={3}></StateInClassComponent>
<HandlerBinding></HandlerBinding>
<ParentComponent />
<LifecycleC />
<LifecycleA />
{/* <CallbackRef /> */}
{/* <ChildInput /> */}
<Parent />
<div style={{display: 'flex', flexDirection: 'column',
    border: '2px solid blue', backgroundColor: 'aqua', 
    margin: '20px', padding: '10px 20px', borderRadius: '5px'}}>
  <ErrorBoundary>
      <Comp name={'Abebaw'} />
  </ErrorBoundary>
  <ErrorBoundary>
      <Comp name= 'Biruh'/>
  </ErrorBoundary>
  <ErrorBoundary>
      <Comp name= 'Addis'/>
  </ErrorBoundary>
  <ErrorBoundary>
      <Comp name= 'Zemenu'/>
  </ErrorBoundary>
</div>
<div id="Skill"> <Skill/> </div>
<AddItemWithButton />
<div id="Box"> <Box /></div>
<div id="Contact">
<Contact id="Contact" img='Images/user.png'
    name='Abebaw Addis'
    // alt={name.chrAt(0)}
    occ='Higher-level-Student'
    phone='(+251) 915507731'
    email='abadis1221@gmail.com'
    add= 'Bahirdar-Ethiopia'
    openSpot= {0}
    location='Offline'
    price={200}
    />
<Contact img='Images/orthodoxawi_temari.jpg'
    name='Zemenu Addis'
    // alt={name.chrAt(0)}
    occ='Church Servant'
    phone='(+251) 910597972'
    email='m.rzemenu1221@gmail.com'
    add= 'Addis Ababa-Ethiopia'
    openSpot= {10}
    location='Offline'
    price={233}
    />
<Contact img='Images/biruh.jpg'
    name='Biruh Zemenu'
    // alt={name.chrAt(0)}
    occ='Secondary-School-Student'
    phone='(+251) 964141892'
    email='biruh1221@gmail.com'
    add= 'Dire Dawa-Ethiopia'
    openSpot= {30}
    location='Offline'
    price={205}
    />
<Contact img='Images/u1.png'
    name='Hirut Zemenu'
    // alt={{name}.chrAt(0)}
    occ='Primary-School-Student'
    phone='(+251) 915507731'
    email='hirut1221@gmail.com'
    add= 'Debre Markos-Ethiopia'
    openSpot= {15}
    location='Online'
    price={199}
    />
</div>
<FormData />
{/* <PostList /> */}
{/* <Posts /> */}
<Footer />
</>
  );
}

export default App;