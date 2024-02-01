import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer.jsx';
import Form from '../Form/Form.jsx';
import "./formcontainer.css";


const FormContainer = () => {

    const [products,setProducts] = useState([])

    useEffect(()=>{
      const fetchData = () => {
        return fetch("./data/products.json")
        .then((response)=> response.json)
        .then((data)=>{
          setProducts(data)
        })
        .catch((error)=>{
          console.log(error)
        })
      }
  
      fetchData()
    },[])

    console.log(products)

    const mensaje = "Formulario Prueba";

    return (
        <>
        <div className='contenedor'>
            <h1 className='mensaje'>{mensaje}</h1>
            <Form/>
        </div>
        <Footer/>
        </>
    );
};

export default FormContainer;