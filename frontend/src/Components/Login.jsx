
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react'
export default function Login() {

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const navigate=useNavigate();

  /*  async function login (event){
  event.preventDefault();
  try{
    await axios.post("http://localhost:8084/employee/login",{
  
        email:email,
        password:password,
  }).then((res)=>{
    console.log(res.data);
    if(res.data.message ==="Email does not exist"){
        alert("Email does not exist");
    }
    else if(res.data.message==="Login Success"){
        navigate(`/home`);
    }
    else{
     alert("Entered email and password not found")  ;
    }
  },(fail)=>{
console.error(fail);
  });
  }
  catch(err){
    alert(err);
  }
    }*/
  /*async function login(event) {
    event.preventDefault();
    try {
        const response = await axios.post("http://localhost:8084/employee/login", {
            email: email,
            password: password,
        });
        console.log("Server Response:", response.data);
        if (response.data.message === "Email does not exist") {
            alert("Email does not exist");
        } else if (response.data.message === "Login Success") {
            navigate(`/home`);
        } else {
            alert("Entered email and password not found");
        }
    } catch (err) {
        console.error("Error:", err);
        alert("An error occurred. Please try again.");
    }
}
*//*
async function login(event) {
    console.log("Email:", email);
    event.preventDefault();
    try {
        const response = await axios.post("http://localhost:8084/employee/login", {
            email: email,
            password: password,
        });

        console.log("Server Response:", response.data); // Check the structure of the response

        // Accessing the message directly from response.data
        if (response.data.message === "Email does not exist") {
            alert("Email does not exist");
        } else if (response.data.message === "Login Success") {
            navigate(`/home`);
        } else {
            alert("Entered email and password not found");
        }
    } catch (err) {
        console.error("Error:", err);
        alert("An error occurred. Please try again.");
    }
}
*//*
async function login(event) {
    console.log("Logging in with:", { email, password });
    event.preventDefault();
    try {
        const response = await axios.post("http://localhost:8084/employee/login", {
            email: email,
            password: password,
        });
        console.log("Server Response:", response.data); // Log the full response

        // Adjust this based on the actual response structure
        if (response.data.message === "Email does not exist") {
            alert("Email does not exist");
        } else if (response.data.message === "Login Success") {
            navigate(`/home`);
        } else {
            alert("Entered email and password not found");
        }
    } catch (err) {
        console.error("Error:", err);
        alert("An error occurred. Please try again.");
    }
}


*/   /*async function login(event) {
    event.preventDefault();
    
    // Log the email and password before sending the request
    console.log("Logging in with:", { email, password });

    try {
        const response = await axios.post("http://localhost:8084/employee/login", {
            email: email,
            password: password,
        });

        console.log("Server Response Data:", response.data); // Log the entire response

        // Check if the response structure matches what you're expecting
        if (response.data.message === "Email does not exist") {
            alert("Email does not exist");
        } else if (response.data.message === "Login Success") {
            navigate(`/home`);
        } else {
            alert("Entered email and password not found");
        }
    } catch (err) {
        console.error("Error during login:", err);
        alert("An error occurred. Please try again.");
    }
}*/
async function login(event) {
    event.preventDefault();
    
    console.log("Attempting to log in with:", { email, password });

    try {
        const response = await axios.post("http://localhost:8084/employee/login", {
            email: email,
            password: password,
        });

        console.log("Server Response Data:", response.data);

        // Adjust based on actual response structure
        if (response.data.message === "Email does not exist") {
            alert("Email does not exist");
        } else if (response.data.message === "Login Success") {
            navigate(`/home`);
        } else {
            alert("Entered email and password not found");
        }
    } catch (err) {
        console.error("Error during login:", err);
        alert("An error occurred. Please try again.");
    }
}



  return (
    <div>
       <form>
 
      <div className="form group">
                <label >Email:</label>
                <input type="email" className="form-control" id="email" placeholder='Enter Email'
               value={email}
               onChange={(event)=>{
                console.log("Input Email:", event.target.value);
                setEmail(event.target.value);
               }} />
                </div>



                <div className="form group">
                <label >Password:</label>
                <input type="password" className="form-control" id="password" placeholder='Enter Password'
               value={password}
               onChange={(event)=>{
                console.log("Input Password:", event.target.value);
                setPassword(event.target.value);
               }} />
                </div>

 <button type='submit' className="btn btn-primary mt-4" onClick={login} >login</button>
        </form>
    </div>
  )
}

