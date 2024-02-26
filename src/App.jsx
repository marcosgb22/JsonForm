import './App.css'
import NavBar from "./components/Navbar/Navbar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Error from './components/Error/Error';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ItemContainerDetail from './components/ItemListConteinerDetail/ItemListConteinerDetail';
import CartCanvas from './components/CartCanvas/CartCanvas'
//import {getFirestore,doc,getDoc, getDocsFromServer} from "firebase/firestore"
//import {getFirestore,collection,getDocs,query,where} from "firebase/firestore"
import { CartProvider } from './Context/CartContext';
import Checkout from './components/Checkout/Checkout';
import Form from './components/Form/Form';
import FormContainer from './components/FormContainer/FormContainer';


function App() {

  //  console.log(product)
    const greet = "Bienvenidos a Öl Beer";


    return (
    <>


      <BrowserRouter>
        <CartProvider> 
        <NavBar/>
        <Routes>
          <Route path='/:tFormulario' element={<FormContainer/>}/>
          <Route path='/IPA' element={<FormContainer/>}/>
          <Route path='/Negra' element={<FormContainer/>}/>
          <Route path='/Blonde' element={<FormContainer/>}/>
          <Route path='/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:idProduct' element={<ItemContainerDetail/>}/>
          <Route path='/IPA/item/:idProduct' element={<ItemContainerDetail/>}/>
          <Route path='/Negra/item/:idProduct' element={<ItemContainerDetail/>}/>
          <Route path='/Blonde/item/:idProduct' element={<ItemContainerDetail/>}/>
          <Route path='/cartcanvas/item/:idProduct' element={<ItemContainerDetail/>}/>
          <Route path='*' element={<Error/>}/>
          <Route path='/cartcanvas' element={<CartCanvas/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
        </CartProvider>
        
      </BrowserRouter>

    </>
  )
}

export default App


