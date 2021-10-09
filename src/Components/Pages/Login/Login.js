import React, { useState } from 'react';
import {Link, Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const Login = () => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (

        <>

        <div class="jumbotron d-flex align-items-center min-vh-100">

            <div className="container">
                <img src="/logo/ferraree_logo.png"/>
                <div className="text-center"><h1><strong>LOG IN</strong></h1></div>
                <form style={{ width: "372px" }}>
                <div className="mt-5 mb-3">
                    <label for="InputUsername" className="form-label">Username</label>
                    <input type="text" name="username" className="form-control" 
                    id="InputUsername" placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="mt-4 mb-4">
                    <label for="InputPassword" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" 
                    id="InputPassword" placeholder="password" data-toggle="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mt-3 mb-3">Don't have an account? <Link to ="/Register">Register here.</Link></div>
                </form>
                <div className="mt-5 text-center"><button type="submit" className="btn btn-primary shadow-none">LOG IN</button></div>
                </div>

        </div>

        </>
    );
};

export default Login;