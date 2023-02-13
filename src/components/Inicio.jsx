import React from 'react';

import './styles/Inicio.css';

const Inicio = ({ title }) => {

  return (
    <section className="fondo fondo-slide-1">
      <div className="fondo-container">
        <article className="fondo-container__text-box">
          <h1>{title}</h1>
          <p>Bienvenido a nuestra tienda</p>
        </article>
      </div>
    </section>
  );
};

export default Inicio;