import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import './Login.css';


const Login = () => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [pathCtrl, setPathCtrl] = useState("");

    // let path = '';

    // let pathCtrl = '/dashboard';

    function auth() {
        axios
            .post('http://127.0.0.1:8000/api/login', {
                Username: username,
                Password: password
            })
            .then(res => {
                switch(res.data){
                    case 'success' :
                        console.log('success');
                        routeChange('/dashboard');
                        break;
                    case 'error' :
                        console.log('error');
                        alert('Invalid Authentication');
                        break;
                }
            })
            .catch(err => console.log(err.message));
    }
    
    function routeChange(path) {
        setPathCtrl(path);
        console.log(pathCtrl);
        return pathCtrl;
    }
    


    return (

        <div className="login">
            <div className="login-container">
                <center><img src="/logo/ferraree_logo.png" width="380px"/></center>
                <div><center><h1>LOG IN</h1></center></div>
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
                <center>
                    <Link to={pathCtrl}>
                        <button type="submit" className="btn btn-primary" onClick={() => {auth()}}>LOG IN</button>
                    </Link>
                </center>
                </div>
        </div>
    );
}

export default Login;