import React, { useState } from 'react'
import axios from 'axios';

export default function Register() {
    const [employeeName,setEmployeeName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    async function save(event) {
        try{
            await axios.post("http://localhost:8084/employee/save",{
                employeeName:employeeName,
                email:email,
                password:password,
            });
            alert("Student Registration Successfully");

        }
        catch(err){
            alert (err);
        }
    }

  return (
    <div className="containervmt-4">
     <div className="card">
        <h1>Student Registration</h1>

        <form>
            <div className="form group">
                <label >First Name:</label>
                <input type="text" className="form-control" id="employeeName" placeholder='Enter Name'
               value={employeeName}
               onChange={(event)=>{
                setEmployeeName(event.target.value);
               }} />
                </div>



                <div className="form group">
                <label >Email:</label>
                <input type="text" className="form-control" id="email" placeholder='Enter Email'
               value={email}
               onChange={(event)=>{
                setEmail(event.target.value);
               }} />
                </div>



                <div className="form group">
                <label >Password:</label>
                <input type="text" className="form-control" id="password" placeholder='Enter Password'
               value={password}
               onChange={(event)=>{
                setPassword(event.target.value);
               }} />
                </div>

 <button type='submit' className="btn btn-primary mt-4" onClick={save} >Save</button>
        </form>
     </div>
    </div>
  )
}
