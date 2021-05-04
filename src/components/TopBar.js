import logo1 from '../imgs/logos-05.png';
import logo2 from '../imgs/logos-06.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import SideBar from './SideBar';

//STYLES--------------------------------
const divStyle = {
    backgroundColor: "#12151B",
    height: "6vh",
    width: "100vw",
    position: "fixed",
    top: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    filter: "drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.25))",
    zIndex: 10
}

const logoStyle = {
    margin: "auto",
    height: "80%",
    textAlign: "center"
}

const buttonStyle = {
    border: "none",
    backgroundColor: "transparent"
}

const TopBar = () => {

    return (
        <div>
            <div style={divStyle}>
                <div style={logoStyle}>
                    <img src={logo1} style={{height: "100%"}}/>
                    <img src={logo2} style={{height: "100%"}}/>
                </div>
            </div>
            <SideBar/>
        </div>
    )
        
}

export default TopBar;