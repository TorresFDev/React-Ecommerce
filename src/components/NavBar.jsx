import React from "react";
import CartWidget from "./CartWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./styles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = ({ background }) => {
    return (
        <header className={`header background--${background}`}>
            <div className="header-container">
                <div className="menu-button">
                    <FontAwesomeIcon icon={faBars} size="lg" color="white" />
                    <span>Menu</span>
                </div>

                <nav>
                    <ul className="nav-container">
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li className="products-item">
                            <Link to="/category">Productos</Link>
                        </li>

                        <li>
                            <Link to="/aboutus">Nosotros</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contacto</Link>
                        </li>
                    </ul>
                </nav>

                <div className="logo-container"></div>
                <CartWidget />
            </div>
        </header>
    );
};

export default NavBar;
