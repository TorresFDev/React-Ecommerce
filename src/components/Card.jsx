import React from 'react';
import './styles/Card.css';
import {Counter} from "./Counter"
// import {collection,getDocs,deleteDoc,doc} from "firebase/firestore"
// import {db} from "../firebaseConfig/firebase.js";

export default function Card() {

    return (

<div className="gallery">
    <div className="content">
        <img src="./fuente.jpg" alt="" />
        <h3>pepito</h3>
        <h6>$500</h6>
        <Counter/>
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
