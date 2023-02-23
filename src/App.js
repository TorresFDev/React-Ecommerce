import React from "react";
import NavBar from "./components/NavBar.jsx";
import Inicio from "./components/Inicio.jsx";
import PrimerasCard from "./components/PrimerasCard.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";


export default function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar  />
                <Inicio title="Coder Store" />
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/category" element={<PrimerasCard />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
