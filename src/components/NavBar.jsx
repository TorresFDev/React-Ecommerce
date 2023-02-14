import React from "react";
import CartWidget from "./CartWidget";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./styles/NavBar.css";
// import { Link } from "react-router-dom";

const NavBar = () => {

//     hamburger = document.queryselector(".hamburger");
//     hamburger.onclick = function(){
//     navBar = document.querySelector(".nav-bar");
//     navBar.classList.toggle("active");}
    

    return (
        <header >
            <div className="logo">ReactCoder</div>
            <div className= "hamburger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <nav className ="nav-bar">
                <ul className="container-list">
                    <li className="list-nav-bar">
                        <a href="/" className="active"> inicio </a>
                    </li>
                    <li className="list-nav-bar">
                        <a href="/" className="active"> productos </a>
                    </li>
                    <li className="list-nav-bar">
                        <a href="/" className="active"> nosotros </a>
                    </li>
                    <li className="list-nav-bar">
                        <a href="/" className="active"> contacto </a>
                    </li>
                    <li className="list-nav-bar">
                        <CartWidget />
                    </li>
                </ul>

            </nav>

            

            
     
  
        </header>

    );
};



export default NavBar;


