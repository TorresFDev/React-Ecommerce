import React from 'react';
import './styles/Card.css';
import {Counter} from "./Counter"
import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import {collection,getDocs,deleteDoc,doc} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js"

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function Card() {


const [products,setProducts] = useState([])



const productsColletion = collection (db,"placas")


const getProducts = async ()=>{
const data = await getDocs (productsColletion)

setProducts(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
}




const deleteProduct  = async(id)=>{
const ProductDoc = doc(db,"placas",id) 
await deleteDoc (ProductDoc)
getProducts()
}


const confirmDelete=(id)=>{

    Swal.fire({
        title: 'Estas Seguro?',
        text: "Esto no se revierte!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si Quiero eliminarlo!'
      }).then((result) => {
        if (result.isConfirmed) {
            deleteProduct(id)  
          Swal.fire(
            'Borrado!',
            'tu producto fue borrado.',
            'success'
          )
        }
      })

}




useEffect(()=>{
    getProducts()
},[])





    return (
        
        
        {products.map((product)=>(
        <p>key={product.id}</p>,
        )},
        
        <div className="gallery" >

    
    <div className="content"
    >
        <img src={product.imagen} alt="" />
        <h3>{product.titulo}</h3>
        <h6>${product.precio}</h6>
        <h4>${product.stock}</h4>
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

        
        
)
                
}
