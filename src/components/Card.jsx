import React from 'react';
import './styles/Card.css';
import {collection,getDocs,deleteDoc,doc} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js";

const Card = () => {

    return (

<div className="gallery">
    <div className="content">
        <img src="./fuente.jpg" alt="" />
        <h3>pepito</h3>
        <p>Lorem, t. Ducimus voluptatum dicta rem </p>
        <h6>500</h6>
        <ul>
            <li><i className="fa fa-star checked"></i></li>
            <li><i className="fa fa-star checked"></i></li>
            <li><i className="fa fa-star checked"></i></li>
            <li><i className="fa fa-star checked"></i></li>
            <li><i className="fa fa-star checked"></i></li>
        </ul>
        <button className="buy-1">Ver Producto</button>
    </div>
    
</div>

);
};

export default Card;