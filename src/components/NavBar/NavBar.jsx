import React from "react";
import { useState } from "react";
import "./NavBar.css";
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';


function NavBar() {

    //for mobile view
    const [showSearch, setShowSearch] = useState(0);

    function handleCollab() {
        console.log("collab");
    }
    function handleResource() {

    }
    function handleContact() {

    }
    function handleSearchInput() {
        setShowSearch(prev => !prev);
    }

    return <div id="navbar">
        <div id="menu-icon"><MenuIcon sx={{ fontSize: 55 }} color="action"/></div>
        <h1>Campus<span>Q</span></h1>

        <form>
            <input className={showSearch? "show-search" : "hide-search"} id="search-input" type="search" placeholder="Search"></input>
        </form>

        <button  className="nav-btn slide-bar" onClick={handleCollab}>
            <div className="icon-div">
                <div className="icon-inner-div"><PeopleIcon /></div>
                <span>Collaboration</span>
            </div> 
        </button>
        <button className="nav-btn slide-bar" onClick={handleResource}>Resources</button>
        <button className="nav-btn slide-bar" onClick={handleContact}>Contact Us</button>

        <button className="login-btn slide-bar">
            <div className="icon-div">
                <div className="icon-inner-div"><AccountCircleIcon /></div>
                <span>Login</span>
            </div>
        </button>
        <div id="search-icon" onClick={handleSearchInput}><SearchIcon sx={{ fontSize: 55 }} color="action" /></div>
    </div>;
}

export default NavBar;