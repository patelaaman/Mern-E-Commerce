
import React from 'react'
import AppContext from './Context/AppContext'
import ShowProduct from './Components/Product/ShowProduct'
import { BrowserRouter,Routes,Route,} from "react-router-dom"
import ProductDetails from './Components/Product/ProductDetails'
import RelatedProduct from './Components/Product/RelatedProduct'
import Navbar from './Components/Navbar'
import SearchProduct from './Components/Product/SearchProduct'
import Register from './Components/User/Register'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Components/User/Login'
import Profile from './Components/User/Profile'

const App = () => {
 
  return (
      <>
        <BrowserRouter>
           <Navbar></Navbar>
           <ToastContainer />
             <Routes>
                <Route path="/" element={<ShowProduct></ShowProduct>}> </Route>
                <Route path="/product/search/:term" element={<SearchProduct></SearchProduct>}></Route>
                 <Route path="/product/:id" element={<ProductDetails></ProductDetails>}></Route>
                 <Route path="/register" element={<Register></Register>}></Route>
                 <Route path="/login" element={<Login></Login>}></Route>
                 <Route path="/profile" element={<Profile></Profile>}></Route>
             </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
