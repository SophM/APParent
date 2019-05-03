import React from "react";
import "./style.css";
import { stack as Menu } from 'react-burger-menu';

function SideBar() {
    return (
        <div id="sidebar">
            <Menu>
                <a className="menu-item" href="/">
                    Home
                </a>
                <a className="menu-item" href="#">
                    My profile
                </a>
                <a className="menu-item" href="#">
                    All members
                </a>
                <a className="menu-item" href="#">
                    About us!
                </a>
                <a className="menu-item" href="#">
                    Contact
                </a>
            </Menu>
        </div>

    );
}

export default SideBar; 