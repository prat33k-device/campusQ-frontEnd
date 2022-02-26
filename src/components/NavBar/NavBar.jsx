import React from "react";
import "./NavBar.css";
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function NavBar() {

    function handleCollab() {
        console.log("collab");
    }
    function handleResource() {

    }
    function handleContact() {

    }

    return <div id="navbar">

        <h1>Campus<span>Q</span></h1>

        <form>
            <input id="search-input" type="search" placeholder="Search"></input>
        </form>

        <button  className="nav-btn" onClick={handleCollab}>
            <div className="icon-div">
                <PeopleIcon />
                <span>Collaboration</span>
            </div> 
        </button>
        <button className="nav-btn" onClick={handleResource}>Resources</button>
        <button className="nav-btn" onClick={handleContact}>Contact Us</button>

        <button className="login-btn">
            <div className="icon-div">
                <AccountCircleIcon />
                <span>Login</span>
            </div>
        </button>

    </div>;
}

export default NavBar;