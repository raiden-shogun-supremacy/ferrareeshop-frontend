import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './Register.css';

const Register = () => {
    
    return (

        <>
            <div className="register-container">
                <div><center><h1>REGISTER</h1></center></div>
                <form action="" class="register-form">
                    <label for="fname">First Name
                    <input type="text" id="fname" placeholder="first name" required></input></label>
                    <label for="lname">Last Name
                    <input type="text" id="lname" placeholder="last name" required></input></label>
                    <label for="InputUsername">Username
                    <input type="text" id="InputUsername" placeholder="username" required/></label>
                    <label for="dept">Department
                    <select id="department" required>
                        <option value="" disabled selected hidden>department</option>
                        <option value="Dept1">Dept - 1</option>
                        <option value="Dept2">Dept - 2</option>
                        <option value="Dept3">Dept - 3</option>
                    </select></label>
                    <label for="InputPassword" class="fullwidth">Password
                    <input type="password" id="InputPassword" placeholder="password" required/></label>
                    <p class="fullwidth"><div align="center">Already have an account? <Link to ="/login">Log in here.</Link></div>
                    <center><br/><br/><button type="submit" className="btn btn-primary">REGISTER</button></center></p>
                </form>
                </div>
        </>
    );
};

export default Register;