import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import './Styles/header.css'
import Rating from './Rating';
import Login from './Login';

function Header(props) {

    const[dark, setDark] = useState(false)
    const[isLoggedOut, setIsLoggedOut] = useState(false)

    useEffect(() => {
        const saveMode = localStorage.getItem('darkMode') === 'true';
        setDark(saveMode);
    }, []);
    useEffect(() => {
        localStorage.setItem('darkMode', dark);
        if(dark){
            document.body.classList.add('dark-mode')
        }else{
            document.body.classList.remove('dark-mode')
        }
    })
    if(dark){
        document.body.classList.add('dark-mode')
    }else{
        document.body.classList.remove('dark-mode')
    }
    function toggleLight(){
        setDark(!dark)
    }

const[menu, setMenu] = useState(false)
const[setting, setSetting] = useState(false)
const[share, setShare] = useState(false)
const[moreApp, setMoreApp] = useState(false)
const[rating, setRating] = useState(false)

function handleMenu(){
    setMenu(prev => !prev);
    if(menu){
        document.getElementsByClassName('menu-icon').style.display = "none";
    }
}
function handleExitMenu(){
    setMenu(false)
}
function handleSettingLists(){
    setSetting(prev => !prev)
}
function handleShareLists(){
    setShare(prev => !prev)
}
function handleMoreApp(){
    setMoreApp(prev => !prev)
}

function handleRating(){
    setRating(s => !s)
}

function handleLogout(){
    setIsLoggedOut(true)
}

  return (
<header className="header">
    <ul className="nav-bar-list">
    <nav>
        <li className='user-name'>{props.userName? props.userName: 'Abebaw'}</li>
        <li> <img className="siteLogo" src="Images/user.png" alt="ABE" /> </li>
        <li className="nav-list" > <a href="#Button"> Button </a></li>
        <li className="nav-list" > <a href="#ToDo-List"> Todo-List </a></li>
        <li className="nav-list"> <a href="#React-Hook"> Hook </a> </li>
        <li className="nav-list"> <a href="#React-Array"> Array </a> </li>
        <li className="nav-list"> <a href="#Skill"> Skill </a> </li>
        <li className="nav-list"> <a href="#Contact"> Contact </a> </li>

        <li onClick={handleMenu} className="menu-icon" > ≡</li>
        {menu &&  <div className="menu-nav-bar-list" >
                <li className="logout"><a href="#Login" onClick={handleLogout}>Logout</a></li>
                <li className="menu-exit-icon" onClick={handleExitMenu}>×</li>
                <li onClick={toggleLight} className="light">Dark-Mode<img className="toggleimg" 
                          src={dark?  'Images/toggle-on.svg' : 'Images/toggle-off.svg'}/> </li>
                <li> <a href="#Button"> Button </a></li>
                <li> <a href="#ToDo-List"> Todo-List </a></li>
                <li> <a href="#React-Hook"> React-Hook </a> </li>
                <li> <a href="#React-Array"> React-Array </a> </li>
                <li> <a href="#Skill"> Skill </a> </li>
                <li> <a href="#Contact"> Contact </a> </li>
                <li className="other-menus" onClick={handleSettingLists}> Settings </li>
                {setting && <div className="setting-container nested-list-container"> 
                    <li>Account</li>
                    <li>Profile</li>
                    <li>Darkness</li>
                    </div>}
                <li className="other-menus" onClick={handleMoreApp}> More App </li>
                {moreApp && <div className="more-app-container nested-list-container"> 
                    <li>Facebook</li>
                    <li>Telegram</li>
                    <li>Youtube</li>
                    <li>Twitter</li>
                    </div>}
                <li className="other-menus" onClick={handleShareLists}> Share</li>
                {share && <div className="share-container nested-list-container"> 
                    <li> <a href="www.facebook.com">Facebook</a></li>
                    <li> <a href="www.telegram.com">Telegram</a></li>
                    <li> <a href="www.instagram.com">Instagram</a></li>
                    <li> <a href="www.twitter.com">Twitter</a></li>
                    <li> <a href="www.youtube.com">Youtube</a></li>
                    </div>}
                <li className="other-menus" onClick={handleRating}> Rate Us </li>
                {rating && <div className='nested-list-container'><Rating /> </div>}
                <li className="other-menus"> Save </li>
                <li className="other-menus"> Download <span><img src="Images/download.svg" alt="" /></span></li>
              </div>}
      </nav>
    </ul>
    {isLoggedOut && ReactDOM.createRoot(document.getElementById('root')).render(<Login/>)}
</header>
  )
}

export default Header
