import React, { useState } from 'react';
import {Link, Redirect} from "react-router-dom";
import './Login.css';

const Login = () => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (

        <>
            <div className="login-container">
                <center><img src="/logo/ferraree_logo.png"/></center>
                <div><center><h1>LOG IN</h1></center></div>
                <form style={{ width: "372px" }}>
                <div>
                    <label for="InputUsername" className="form-label">Username</label>
                    <br/><input type="text" name="username" className="form-control" 
                    id="InputUsername" placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div>
                    <br/><label for="InputPassword" className="form-label">Password</label>
                    <br/><input type="password" name="password" className="form-control" 
                    id="InputPassword" placeholder="password" data-toggle="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div><br/>Don't have an account? <Link to ="/Register">Register here.</Link></div>
                </form>
                <center><br/><br/><button type="submit" className="btn btn-primary">LOG IN</button></center>
                </div>
        </>
    );
};

export default Login;