import React, { useState } from 'react'

function FormData() {

    const[formData, setFormData] = useState({firstName: "", lastName: ""});

    function handleInputChange(event){
        setFormData(prevFormData => {
            return{...prevFormData, [event.target.name]: event.target.value}});
    }
    function handleFormData(){
        console.log(formData)
    }
  return (
    <div>
      <form action="#">
        <input type="text" name="firstName" id="firstName" placeholder='First Name' 
        value={formData.firstName} onChange={handleInputChange}/>
        <input type="text" name="lastName" id="lastName" placeholder='Last Name' 
        value={formData.lastName} onChange={handleInputChange}/>
        <button className='button' onClick={handleFormData}>Submit</button>
      </form>
    </div>
  )
}

export default FormData
