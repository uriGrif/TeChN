import './Footer.css';
import logo from '../imgs/logos-04.png';

const Footer = () => {
    return(
        <div className="container-fluid footer">
            <div className="row">
                <div className="col-md-4">
                    <img src={logo} alt="TeChN" style={{width: "50%"}}/>
                </div>
                <div className="col-md-4 links">
                    <p>About</p>
                    <p>Information</p>
                    <p>Our Goal</p>
                    <p>Our Team</p>
                </div>
                <div className="col-md-4 links">
                    <p>Contact:</p>
                    <p>tel: 1234-1234</p>
                    <p>email: contact@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;