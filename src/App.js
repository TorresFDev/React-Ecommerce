
import React from 'react';
import NavBar from './components/NavBar.jsx';
import Inicio from './components/Inicio.jsx';
import Mostrar from "./components/Mostrar.jsx"
import ItemListContainer from './components/ItemListContainer.jsx';
import './App.css';

export default function App() {
  return (
    <>
      <NavBar background={'transparent'} />
      <Inicio title="Coder Store" />
      <ItemListContainer greeting= "Lista de Productos"/>
      <Mostrar/>

    </>
  );
}