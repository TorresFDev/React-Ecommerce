import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import CartWidget from "./CartWidget"

const  NavBar= ({background}) =>{

return(

    <header className={`header background--${background}`}>
    <div className="header-container">

        <div className="menu-button">
            <FontAwesomeIcon icon={faBars}/>
            <small>Menu</small>
        </div>

        <nav>
            <ul className="nav-container">
                <li>
                    <a href="/">Inicio</a>
                </li>
                <li className="products-item">
                    <a href="/">Productos <span className="arrow"></span></a>
                </li>
                <li>
                    <a href="/">Contactos</a>
                </li>
            </ul>
        </nav>
    </div>

    <div>
        <CartWidget/>
    </div>
</header>


)
    
}
export default NavBar