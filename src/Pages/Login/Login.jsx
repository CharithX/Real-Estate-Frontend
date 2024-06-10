import { Link, json, useNavigate } from "react-router-dom";
import "./Login.scss";
import axios from "axios";
import { useContext, useState } from "react";
import APIRequest from "../../lib/APIRequest";
import { AuthContext } from "../../context/AuthContext";

function Login() {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   
  const { updateUser } = useContext(AuthContext);
  console.log(updateUser); 

  const naviagte = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
       const res = await APIRequest.post("/auth/login", {
         username,
         password,
       });
     updateUser(res.data)
      
      
      naviagte("/profile");
      console.log(res);
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    } 
  };
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}
export default Login;
