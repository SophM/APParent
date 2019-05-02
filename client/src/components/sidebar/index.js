import React from "react"; 
import "./style.css";

function SideBar() {  
    return (
        <div>
            <nav id="sidebar">
                <div className="sidebar-header">
                    {/* <img src="./images/logo-only-color.png" /> */}
                    <h3>APP</h3>
                    <strong>APP</strong>
                </div>

                <ul className="list-unstyled components">
                    <li className="active">
                        <a href="#homeSubmenu" aria-expanded="false" className="dropdown-toggle">
                            <i className="fas fa-home"></i>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-briefcase"></i>
                            About
                        </a>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="fas fa-copy"></i>
                            View
                        </a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                            <li>
                                <a href="#">My Profile</a>
                            </li>
                            <li>
                                <a href="#">All Posts</a>
                            </li>
                            <li>
                                <a href="#">All Members</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-question"></i>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-paper-plane"></i>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default SideBar; 