import { useState } from "react";
import Button from 'react-bootstrap/Button';
import "./styles/Counter.css"

export const Counter = () =>{
    const[count,setCount]= useState(0)
    return (
        <>
      <div>
        <Button className="boton-contador" onClick={()=>setCount(count+1)} >+</Button>{' '}
        {count}
        <Button  className="boton-contador" onClick={()=>setCount(count-1)} >-</Button>{' '}
    </div>
        <Button  className="boton-carrito">Agregar</Button>{' '}
        </>
    )
}