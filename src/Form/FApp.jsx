import React, { useState } from 'react'
import FormInp from './FormInp' 
import "./fapp.css"
import Home from '../Pages/Home'
import { useNavigate } from 'react-router-dom'
 

const FApp = () =>

{
//  const navigate = useNavigate()

  const [values,setValues]=useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmpassword:"", 
  })

  const input=[
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      errorMessage:"Username should be 3-16 characters and shouldn't include any special characters!",
      label:"Username",
      pattern:"^[A-Za-z0-9]{3,16}$",
      required:true   
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage:"It should be a valid email address!",
      label:"Email",
      required:true     
    },
    {
      id:3,
      name:"birthday",
      type:"date",
      placeholder:"Birthday",
      label:"Birthday",
          
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage:"Password should be 8-20 character and include at least 1 letter, 1 number and 1 specia; character ",
      label:"Password",
      pattern:"^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]){3}$",
      required:true
          
    },
    {
      id:5,
      name:"confirmpassword",
      type:"password",
      placeholder:"Confirm Password",
      errorMessage:"Password dont' match",
      label:"Confirm Password",
      pattern:values.password,
      required:true    
    }
  ]

 
 const handleSubmit =(e)=>{ 
   e.preventDefault();
  //  const data = new FormData(e.target)
  //  console.log(Object.fromEntries(data.entries()))
  
  };
  const onChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
    
  }
  
  
  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
      {input.map((input)=>
        (<FormInp key={input.id} {...input} value={values[input.name]} onChange={onChange} />)
      
      )}
      
    <br />
      <button  >Submit</button>

      
       
      </form>
    </div>
  )
}

export default FApp
