import React from "react"; 
import "./style.css";

function SideBar() {  
    return (
        <div>
            <nav id="sidebar">
                <div class="sidebar-header">
                    <img src="./images/logo-only-color.png" />
                    <strong>APP</strong>
                </div>

                <ul class="list-unstyled components">
                    <li class="active">
                        <a href="#homeSubmenu" aria-expanded="false" class="dropdown-toggle">
                            <i class="fas fa-home"></i>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-briefcase"></i>
                            About
                        </a>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                            <i class="fas fa-copy"></i>
                            View
                        </a>
                        <ul class="collapse list-unstyled" id="pageSubmenu">
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
                            <i class="fas fa-question"></i>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fas fa-paper-plane"></i>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default SideBar; 