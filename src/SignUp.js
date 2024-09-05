import React, { useState } from 'react'
import axios from 'axios'
import './Styles/signup.css'

function SignUp() {

    const[data, setData] = useState([])
    const[name, setName] = useState()
    const[email, setEmail] = useState()
    const[pass, setPass] = useState()

    function submitHandler(){
      const newData = {name: name, email: email, pass: pass};
    if(name.trim() !== "" && email.trim() !== "" && pass.trim() !== ""){
        setData(d => [...d, newData]);
        setName("")
        setEmail("");
        setPass("");

        let data = new FormData();
        data.append('name', name);
        data.append('email', email);
        data.append('pass', pass);

        axios.post('http://localhost/React/API.php', data)
            .then(response => {
              console.log(response)
              alert(response.data)
            })
            .catch(error => {
              console.log(error)
              alert(error)
            })
    }
    }
    function handleRemoveData(index){
        setData(d => d.filter((_, i) => i !==index))
    }

  const dataElement = <table>
    <tr>
      <td>Role-No.</td>
      <td>Name</td>
      <td>Email</td>
      <td>Password</td>
    </tr>
    {
    data.map((d, index) => <tr key={index} onClick={() => 
      handleRemoveData(index)}>
        <td>{index+1}</td>
        <td>{d.name}</td>
        <td>{d.email}</td>
        <td>{d.pass}</td>
        </tr>)
  }</table> 


  return (
    <div className='signup-container'>
      {/* <form action="" onSubmit={handleSubmit}> */}
      <input type="text" placeholder='Name' name='name' 
      onChange={(e) => setName(e.target.value)} value={name}/> 
      <h3>{name}</h3>
      <input type="email" placeholder='Email' name='email'
      onChange={(e) => setEmail(e.target.value)} value={email}/>
      <h3>{email}</h3>
      <input type="password" placeholder='Password' name='pass' 
      onChange={(e) => setPass(e.target.value)} value={pass}/>
      <button className='submit-button button' onClick={submitHandler}>Submit</button>
      {/* </form> */}
      {dataElement}
    </div>
  )
}

export default SignUp
