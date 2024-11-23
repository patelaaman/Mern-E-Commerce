import React, { useContext, useState } from 'react'
import AppContext from '../../Context/AppContext'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();
  const {register} =useContext(AppContext) 
  const [input,setInput] = useState({
    name:"",
    email:"",
    password:""
  })

  const  handleInput=(e)=>{
     const name = e.target.name;
     const value= e.target.value;
     setInput(values=>({...values,[name]:value})) 
  }

  const {name,email,password} = input;
  const handleSubmit=async(e)=>{
    e.preventDefault();
   
  //  alert("Your From Has Been Submitted")
  const result =  await register(name,email,password);
  
  if(result.success) {
    navigate("/login")
  }
    console.log(input)

  }

  return (
      <>
         <div className="container my-5 p-4" style={{width:"600px" ,border:"2px solid yellow" ,borderRadius:"10px"}}>
          <h1 className='text-center'>User Register</h1>
         <form className='my-3'>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" name="name"  value={input.name}  onChange={handleInput} className="form-control" id="exampleInputEmail134" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" name="email"  value={input.email}  onChange={handleInput} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name="password"  value={input.password}  onChange={handleInput} className="form-control" id="exampleInputPassword1" />
    </div>
   <div className='d-grid col-6 mx-auto my-3'>
  <button type="submit" onClick={handleSubmit} className="btn btn-primary">Register</button>
  </div>
</form>
         </div>
      </>
  )
}

export default Register
