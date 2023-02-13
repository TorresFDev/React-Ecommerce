import React from 'react';
import './styles/Card.css';

const Card = () => {

    return (

<div className="gallery">
    <div className="content">
        <img src="./fuente.jpg" alt="" />
        <h3>pepito</h3>
        <p>Lorem, t. Ducimus voluptatum dicta rem maiores ea dolorum repudiandae tempore repellendus eum et laboriosam eaque minus esse vel, nemo deleniti sapiente quibusdam molestias ipsum aspernatur, unde id autem, asperiores ipsa? Labore, nam! Dolorem, voluptatem fugiat ut aspernatur necessitatibus ratione sapiente labore ullam nostrum?</p>
        <h6>500</h6>
        <ul>
            <li><i className="fa fa-star checked"></i></li>
            <li><i className="fa fa-star checked"></i></li>
            <li><i className="fa fa-star checked"></i></li>
            <li><i className="fa fa-star checked"></i></li>
            <li><i className="fa fa-star checked"></i></li>
        </ul>
        <button className="buy-1">Comprar</button>
    </div>
    
</div>

);
};

export default Card;