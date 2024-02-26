import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer.jsx';
import Form from '../Form/Form.jsx';
import "./formcontainer.css";
import { useParams } from 'react-router-dom';


const FormContainer = () => {

    const {tFormulario} = useParams()
    const [products,setProducts] = useState([])

    useEffect(() => {
      const fetchData = () => {
          return fetch("http://localhost:8000/api.php")
          .then((response)=> response.json()) // Asegúrate de agregar paréntesis después de json
          .then((data)=>{
              setProducts(data);
          })
          .catch((error)=>{
              console.log(error);
          });
      };
  
      fetchData();
  },[]);


    console.log(products)

    const mensaje = `Formulario ${tFormulario}`;  

    return (
        <>
        <div className='contenedor'>
            <h1 className='mensaje'>{mensaje}</h1>
            <Form tFormulario={tFormulario}/>
        </div>
        <Footer/>
        </>
    );
};

export default FormContainer;