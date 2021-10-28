import './CustomerRegister.css'
import '../../../App.css'
import {Link} from "react-router-dom";
import {useStage} from 'react';

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
                <form className="customer-register-form" >
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" className="input" placeholder="first name" />
                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" className="input" placeholder="last name" />
                    <label for="Address" className="customer-fullwidth">Address</label>
                    <input type="text" id="Address" className="input" placeholder="address" />
                    <label for="Phone">Phone</label>
                    <input type="int" id="Phone" className="input" placeholder="phone number" />
                    <label for="PostalCode">Postcode
                    <input type="int" id="PostalCode" className="input" placeholder="postcode" /></label>
                    <button type="submit" className="btn-primary">REGISTER</button>
                </form>
            </div>
        </div>
    );
};

export default CustomerRegister;