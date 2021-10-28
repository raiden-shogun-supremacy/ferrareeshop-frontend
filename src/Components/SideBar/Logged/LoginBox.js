import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const LoginStatus = () => {

    const [clock, setClock] = useState(new Date());

    useEffect(() => {
        setInterval(() => setClock(new Date()), 1);
    },[]);

    return (
        <div>
            <div className="logged-in-box">
                {/* We will useState to get an API later down here */}
                <div className="crop">
                    <img src="/user/shogun.jpg" />
                </div>
                <h3>Raiden Shogun</h3>
                <p>sales</p>
                <p>
                    {clock.toLocaleDateString('en-GB', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: false
                    })}
                </p>
                <Link to="/login">
                    <button className="log-out">Log Out</button>
                </Link>
            </div>
            <div className="credit">
                <p>inspired by Dmitry Lauretsky</p>
                <p>© 2021 Ferraree Software Studio</p>
            </div>
        </div>
        
    );
}

export default LoginStatus;