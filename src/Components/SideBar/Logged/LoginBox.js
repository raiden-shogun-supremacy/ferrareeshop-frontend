const LoginStatus = () => {
    return (
        <div>
            <div className="logged-in-box">
                {/* We will useState to get an API later here */}
                <h3>Aueboon Ruenkamfu</h3>
                <p>sales</p>
                <button className="log-out">Log Out</button>
            </div>
            <div className="credit">
                <p>inspired by Dmitry Lauretsky</p>
                <p>© 2021 Ferraree House</p>
            </div>
        </div>
        
    );
}

export default LoginStatus;