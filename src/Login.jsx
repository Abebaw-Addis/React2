import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';
import './Styles/login.css'
import App from './App'

function Login() {

    const[userName, setUserName] = useState('')
    const[userPass, setUserPass] = useState('')
    const[isLoggedIn, setIsLoggedIn] = useState(false)
    const[nameError, setNameError] = useState('')
    const[passError, setPassError] = useState('')


    function handleUserName(e){
        setUserName(e.target.value)
    }
    function handleUserPassword(e){
        setUserPass(e.target.value)
    }
    function handleUserLoggedIn(){
        if(userName === ''){
            const error = 'User name is required!'
            setNameError(error)
        }else if(userPass === null){
            const error = 'User password is required!'
            setPassError(error)
        }else{
            setIsLoggedIn(true)
        }
    }

    const spanStyle = {
        color: 'red',
        margin: '-10px 0 10px',
        fontSize: '18px',

    }
  return (
    <div className='user-login-container'>
        <h2 style={{textTransform: 'uppercase', maxWidth: '80%', 
                    fontSize:'20px', letterSpacing: '1.6px', 
                    marginTop: '-80px'}}>
                    welcome to our site abebawsite.com</h2>

      <input type="text" placeholder='User Name' value={userName} 
      onChange={handleUserName} className='username-input'/> 
      <span style={spanStyle}>{userName == '' && nameError}</span>

      <input type='password' placeholder='User Password' value={userPass} 
      onChange={handleUserPassword} className='userpass-input'/>
      <span style={spanStyle}>{userPass == null && passError}</span>

      <button onClick={handleUserLoggedIn} className='button login-button'>Login</button>
      {isLoggedIn &&  ReactDOM.createRoot(document.getElementById('root')).render(
        <App userName={userName} userPass={userPass}/>)}
      <h4 className=''>welcome to our site abebawsite.com</h4>

    </div>
  )
}

export default Login
