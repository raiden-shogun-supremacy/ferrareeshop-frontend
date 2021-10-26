import React, { useState } from 'react';
import {Link, Redirect} from "react-router-dom";
import './Login.css';


const Login = () => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (

        <div className="login">
            <div className="login-container">
                <center><img src="/logo/ferraree_logo.png" width="380px"/></center>
                <div><center><h1>LOG IN</h1></center></div>
                <form action="/" onSubmit={handleSubmit}>
                <div>
                    <label for="InputUsername">Username</label>
                    <input type="text" className="form-control" 
                    id="InputUsername" placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} required/>
                </div>
                <div style={{marginTop: "20px"}}>
                    <label for="InputPassword" >Password</label>
                    <input type="password" className="form-control" 
                    id="InputPassword" placeholder="password" data-toggle="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div><br/>Don't have an account? <Link to ="/register">Register here.</Link></div>
                <center><button type="submit" className="btn btn-primary">LOG IN</button></center>
                </form>
                </div>
        </div>
    );
}

export default Login;