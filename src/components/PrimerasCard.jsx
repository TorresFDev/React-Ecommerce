import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import {collection,getDocs,deleteDoc,doc} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js"
import Swal from "sweetalert2"
// import withReactContent from "sweetalert2-react-content"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';






const PrimerasCard = ()=>{

//hooks
const [products,setProducts]= useState([])

//firestore db
const productsCollection = collection(db,"placas")

//funcion para mostrar todos los docs
const getProducts= async () =>{
    const data = await getDocs (productsCollection)
console.log (data.docs)
setProducts(
    data.docs.map((doc)=>({...doc.data(),id:doc.id}))
)

}

const deleteProduct= async(id)=>{
const productDoc= doc(db,"placas",id)
await deleteDoc (productDoc)
getProducts()
}

const confirmDelete=(id)=>{
    Swal.fire({
        title: 'Estas Seguro/a',
        text: "No podes revertir este cambio",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, deseo Borrarlo'
      }).then((result) => {
        if (result.isConfirmed) {
            deleteProduct(id)
          Swal.fire(
            'Borrado!',
            'Has eliminado el Documento.',
            'success'
          )
        }
      })


}

useEffect(()=>{
    getProducts()
},[])

return(

 <> 


{products.map((product)=>(
<div key={product.id}>


    
    <Link to={`/edit/${product.id}`} className="btn btn-light" ><i className="fa-solid fa-pencil"></i></Link>
    <button onClick={()=>{confirmDelete(product.id)}} className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
    
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.imagen} />
      <Card.Body>
        <Card.Title>{product.titulo}</Card.Title>
        <Card.Text>
        <h3>${product.precio}</h3>
        <h5>Stock:{product.stock} <br /></h5>
        </Card.Text>
        <Button variant="primary">Ver Producto</Button>
      </Card.Body>
    </Card>
</div>


))}








</>
)

}

export default PrimerasCard