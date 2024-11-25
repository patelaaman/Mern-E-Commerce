import  { useEffect, useState } from 'react'
import AppContext from './AppContext'
import axios from "axios"
import { ToastContainer, toast ,Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppState = (props) => {
    const url ="http://localhost:1000/api"
     const [products,setProducts] = useState([])

     const [token,setToken] = useState([])
     const [isAuthenticated,setIsAuthenticated] = useState(false)
     const [filteredData,setFilterdData] = useState([])
     const [userId,setUser] = useState()
     const [cart,setCart] = useState()

     
    useEffect(()=>{
      const fetchProduct = async ()=>{

        const p = await axios.get(`${url}/product/all`,{
            headers:{
                "Content-Type":"Application/json"
            },
            withCredentials:true
        });
        console.log(p.data.prodata)
        setProducts(p.data.prodata)
        setFilterdData(p.data.prodata)
        userProfile();
      }
       
      fetchProduct()
      userCart();
    },[token])

    useEffect(()=>{
      let lstoken = localStorage.getItem("token")
     // console.log("ls Token",lstoken)
     if(lstoken){    
      setToken(lstoken)
      setIsAuthenticated(true);
     }
      
     //setToken(localStorage.getItem("token"))
    },[])

    // Register User 
    const register = async (name,email,password)=>{
      const api = await axios.post(
        `${url}/user/register`,
        {name,email,password},
        {
          headers:{
              "Content-Type":"Application/json"
          },
          withCredentials:true
      });
     // alert(api.data.message)
     // console.log("User Register ",api)
     toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
      return  api.data;
    }

    // Login User 
    const login = async (email,password)=>{
      const api = await axios.post(
        `${url}/user/login`,
        {email,password},
        {
          headers:{
              "Content-Type":"Application/json"
          },
          withCredentials:true
      });
     // alert(api.data.message)
     // console.log("User Register ",api)
     toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
     // console.log("User Login",api.data)
     setToken(api.data.token)
     setIsAuthenticated(true)
     localStorage.setItem("token",api.data.token)
      return  api.data;
    }

    // Logout User 
   const logout =()=>{
    setIsAuthenticated(false)
    setToken(" ")
    localStorage.removeItem("token")
    toast.success("LogOut Succesfully.....!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
   }

   // user Profile 
   const userProfile = async ()=>{
    const p = await axios.get(`${url}/user/profile`,{
        headers:{
            "Content-Type":"Application/json",
            "Auth":token
        },
        withCredentials:true
    });
   // console.log("User Profile",p.data)
    setUser(p.data.userId)
  }
   

  // add to Cart 
  const addToCart = async (productId,title,price,qty,imgSrc)=>{
        
    const api = await axios.post(`${url}/card/add`,{productId,title,price,qty,imgSrc},{
        headers:{
            "Content-Type":"Application/json",
            Auth:token
        },
        withCredentials:true
    });
   // console.log("My Cart ",p)
    toast.success(api.data.message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
   
  }

  // userCart

  const userCart = async (productId,title,price,qty,imgSrc)=>{
        
    const api = await axios.get(`${url}/card/user`,{productId,title,price,qty,imgSrc},{
        headers:{
            "Content-Type":"Application/json",
            Auth:token
        },
        withCredentials:true
    });
    setCart(api.data.cart)
   // console.log("User Cart ",api.data.card)
   
  }
   
  return (
    <>
     <AppContext.Provider value={{products, register, login,url,token,setIsAuthenticated, isAuthenticated,filteredData,setFilterdData,logout,userId,addToCart}}>
        {props.children}
        </AppContext.Provider>
        </>  
  ) 
}

export default AppState
