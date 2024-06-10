import { Link, useNavigate } from "react-router-dom";
import "./Register.scss";
import APIRequest from "../../lib/APIRequest";
import { useState } from "react";

function Register() {
  const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false);
   
  const naviagte = useNavigate()
  const handleSubmit = async (e) => {
    setIsLoading(true)
     e.preventDefault();

    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    
    console.log(username, email, password)

    

    try { 
     const res = await APIRequest.post("/auth/register", {
        username,
        email,
        password,  
      });
      naviagte("/login")
      console.log(res); 
    }
      catch (error) {
      console.log(error)
      setError(error.response.data.message)
    }
    finally {
      isLoading(false);
    }
    
    
  }; 

  return (
    <div className="registerPage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" required  minLength={3} maxLength={15}/>
          <input name="email" type="email" placeholder="Email" required />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <button disabled={isLoading}>Register</button>
          {error && <span>{error}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;
