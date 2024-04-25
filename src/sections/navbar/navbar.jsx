import { useState } from "react";

export function Navbar() {

    const [isMenuOpen, setMenuOpen]= useState(false)

    const toggleMenu =()=>{setMenuOpen(!isMenuOpen);}
        
    
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-lg-5">
        <div  className="container">
            <a className="navbar-brand" target="_blank" href="https://www.marvel.com/">
            <img width={90} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/800px-Marvel_Logo.svg.png"></img>
            </a>
            <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNavAltMarkup"
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNavAltMarkup">
            <div className="ms-auto">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a id="link" href="#" className="nav-link">Home</a></li>
                <li className="nav-item"><a id="link" href="#"  className="nav-link">About</a></li>
                <li className="nav-item"><a id="link" href="#"  className="nav-link">Contact</a></li>
                </ul>
            </div>
            </div>
            </div>
        </nav>
        </>
    );
    }
