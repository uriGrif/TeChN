import './SideBar.css';
import { GrFormClose } from 'react-icons/gr';
import { BiUser } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { AiOutlineProject } from 'react-icons/ai';
import { FaTasks } from 'react-icons/fa';
import { GoSettings } from 'react-icons/go';
import { VscSignOut } from 'react-icons/vsc';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState, useEffect } from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'


var bgClass = "bgNotActive";
var sideBarClass = "sideBarInit";

const SideBar = () => {

    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        if (isOpen) {
            bgClass = "bg";
            sideBarClass = "sideBar";
        }
        else {
            bgClass = "bgNotActive";
            sideBarClass = "sideBarNotActive";
        }
    }, [isOpen])

    return (
        <div>
            <button className="hamburguerButton">
                <IconContext.Provider value={{ color: "#EEEEEE", size: "2em" }}>
                    <GiHamburgerMenu onClick={() => { setIsOpen(!isOpen) }} />
                </IconContext.Provider>
            </button>
            <div className={bgClass} onClick={() => { setIsOpen(!isOpen) }}></div>
            <div className={sideBarClass}>
                <button className="closeButton">
                    <IconContext.Provider value={{ color: "#12151B", size: "2em" }}>
                        <GrFormClose onClick={() => { setIsOpen(!isOpen) }} />
                    </IconContext.Provider>
                </button>
                <div className="elements">
                    <div className="profilePic" />
                    <h2 className="profileName">UriGrif</h2>
                    <ul>
                        <li className="claseLi">
                            <IconContext.Provider value={{ color: "#12151B", size: "2em" }}>
                                <BiUser />
                            </IconContext.Provider>
                            <h5>Profile</h5>
                        </li>

                        <Link to="/projects">
                            <li className="claseLi">
                                <IconContext.Provider value={{ color: "#12151B", size: "2em" }}>
                                    <AiOutlineProject />
                                </IconContext.Provider>
                                <h5>Projects</h5>
                            </li>
                        </Link>
                        
                        <li className="claseLi">
                            <IconContext.Provider value={{ color: "#12151B", size: "2em" }}>
                                <FaTasks />
                            </IconContext.Provider>
                            <h5>Tasks</h5>
                        </li>
                    </ul>
                    <ul>
                        <li className="claseLi">
                            <IconContext.Provider value={{ color: "#12151B", size: "2em" }}>
                                <GoSettings />
                            </IconContext.Provider>
                            <h5>Settings</h5>
                        </li>
                        <li className="claseLi">
                            <IconContext.Provider value={{ color: "#12151B", size: "2em" }}>
                                <VscSignOut />
                            </IconContext.Provider>
                            <h5>Sign Out</h5>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar;