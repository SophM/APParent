import React from "react";
import "./style.css";
import { stack as Menu } from 'react-burger-menu';

function SideBar(props) {
    return (
        <div id="sidebar">
            <Menu>
                <a className="menu-item" href="/">
                    Home
                </a>
                <a className="menu-item" href="#" data-content="myProfile" onClick={props.handleClick}>
                    My profile
                </a>
                <a className="menu-item" href="#" data-content="allMembers" onClick={props.handleClick}>
                    All members
                </a>
                <a className="menu-item" href="#" data-content="aboutUs" onClick={props.handleClick}>
                    About us!
                </a>
                <a className="menu-item" href="#" data-content="contact" onClick={props.handleClick}>
                    Contact
                </a>
            </Menu>
        </div>

    );
}

export default SideBar; 