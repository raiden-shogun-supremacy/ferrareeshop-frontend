import './CustomerRegister.css'
import {Link} from "react-router-dom";
import React, {useStage} from 'react';

const CustomerRegister = () =>{


    return (
        <div className="customer-register-bg">
            <div className="customer-register-pop">
            <Link to ="../Dashboard"><img src="/icon/close.png" className="quit" /></Link>
                <div className="little-header">
                    <p>customer</p>
                </div>
                <div className="customer-register-content">
                    <h1>REGISTER</h1>
                </div>
                <form action="" className="customer-register-form" >
                    <label for="fname">First Name
                    <input type="text" id="fname" className="input" placeholder="first name" required/></label>
                    <label for="lname">Last Name
                    <input type="text" id="lname" className="input" placeholder="last name" required/></label>
                    <label for="Address" className="customer-fullwidth">Address
                    <input type="text" id="Address" className="input" placeholder="address" required/></label>
                    <label for="Phone">Phone
                    <input type="int" id="Phone" className="input" placeholder="phone number" required/></label>
                    <label for="PostalCode">Postcode
                    <input type="int" id="PostalCode" className="input" placeholder="postcode" required/></label>
                    <div align="center" className="customer-fullwidth"><button type="submit" className="btn-primary">REGISTER</button></div>
                </form>
            </div>
        </div>
    );
};

export default CustomerRegister;