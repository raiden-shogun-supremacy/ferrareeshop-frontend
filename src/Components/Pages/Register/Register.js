import { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import './Register.css';

const Register = () => {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [username, setUsername] = useState('');
    const [deptNo, setDeptNo] = useState();
    const [password, setPassword] = useState();

    function createNewEmployee() {
        axios
        .post('http://127.0.0.1:8000/api/register', {
            Fname: fname,
            Lname: lname,
            DeptNo: deptNo,
            Username: username,
            Password: password,
            IsHead: 0
        })
        .then(
            alert('Registeration Successful!')
        )
        .catch(err => alert(err.message));

        
    }
    
    return (

        <>
            <div className="register-container">
                <div><center><h1>REGISTER</h1></center></div>
                <form action="" class="register-form">
                    <label for="fname">First Name
                    <input type="text" id="fname" placeholder="first name" value={fname} onChange={e => setFname(e.target.value)} required></input></label>
                    <label for="lname">Last Name
                    <input type="text" id="lname" placeholder="last name" value={lname} onChange={e => setLname(e.target.value)} required></input></label>
                    <label for="InputUsername">Username
                    <input type="text" id="InputUsername" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} required/></label>
                    <label for="dept">Department
                    <select id="department" onChange={e => setDeptNo(e.target.value)} required>
                        <option value="" disabled selected hidden>department</option>
                        <option value={1}>Dept - 1</option>
                        <option value={2}>Dept - 2</option>
                        <option value={3}>Dept - 3</option>
                    </select></label>
                    <label for="InputPassword" class="fullwidth">Password
                    <input type="password" id="InputPassword" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} required/></label>
                    <p class="fullwidth"><div align="center">Already have an account? <Link to ="/login">Log in here.</Link></div>
                    <center><button type="submit" className="btn btn-primary" onClick={createNewEmployee}>REGISTER</button></center></p>
                </form>
                </div>
        </>
    );
};

export default Register;