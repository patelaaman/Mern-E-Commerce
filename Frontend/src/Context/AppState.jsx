import  { useEffect, useState } from 'react'
import AppContext from './AppContext'
import axios from "axios"
const AppState = (props) => {
    const url ="http://localhost:1000/api"
     const [products,setProducts] = useState([])
     
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
      }

      fetchProduct()
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
      return  api.data;
    }

   
  return (
    <>
     <AppContext.Provider value={{products, register}}>
        {props.children}
        </AppContext.Provider>
        </>  
  )
}

export default AppState
