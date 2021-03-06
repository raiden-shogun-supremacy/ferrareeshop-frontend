import '../PageStyle.css';

const Error404 = () => {
    return (
        <div className="container">
            <div className="content">
                <h1>Uh-Oh... 😞</h1>
                <h4>Page Not Found</h4>
                <img className="error-img" src="/images/notfound.png" />
                <p className="caution">THINGS YOU'RE FINDING IS NOT HERE</p>
            </div>
        </div>
    );
}

export default Error404;