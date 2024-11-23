import React, { useContext, useState } from 'react'
import {  Link, useLocation, useNavigate } from 'react-router-dom'
import AppContext from '../Context/AppContext';

const Navbar = () => {
    const [searchTerm , setSearchTerm] = useState(" ")
    const navigate = useNavigate();
    const location = useLocation();

    const{setFilterdData,products,logout,isAuthenticated} = useContext(AppContext)

    const filterbyCategory=(cat)=>{ 
        setFilterdData(products.filter((data)=>data.category.toLowerCase() == cat.toLowerCase()))
    }
 
    const filterbyPrice=(price)=>{ 
        setFilterdData(products.filter((data)=>data.price >= price))
    }
   
    


    const submitHandler=(e)=>{
        e.preventDefault();
        navigate(`/product/search/${searchTerm}`)
        setSearchTerm(" ")

    }
  return (
  <>
    <div className="nav sticky-top">
        <div className="nav_bar ">
            <Link to={'/'} className="left" style={{ textDecoration:"none", color:"white"}} >
                <h3>Mern E -Commerce</h3>
            </Link>
            <form className="search_bar" onSubmit={submitHandler}>
            <span className="material-symbols-outlined">search</span>
                <input type='text' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} placeholder='Search Products'></input>
            </form>
            <div className="right">
                {isAuthenticated && (
                    <>
                      <button className="btn btn-warning mx-3">Cart</button>
                      <Link to={'/profile'} className="btn btn-primary mx-3">Profile</Link>
                <button className="btn btn-danger mx-3" onClick={()=>{logout();
                    navigate("/")
                }}>Logout</button>
                </>
                )}

                {!isAuthenticated && (
                    <>
             <Link  to={"/login"} className="btn btn-secondary mx-3">Login</Link>
             <Link to={'/register'} className="btn btn-info mx-3">Register</Link>
             </>
                )}
              
               


               
                
            </div>
        </div>
   {location.pathname == "/" && (
    <div className="">
    <div className="sub_bar">
            <div className="itmes" onClick={()=>setFilterdData(products)}>No Filter</div>
            <div className="itmes" onClick={()=>filterbyCategory("indianWhiskey")}>WHISKEY</div>
            <div className="itmes" onClick={()=>filterbyCategory("singleMalts")}>S-MALTS</div>
            <div className="itmes" onClick={()=>filterbyCategory("vodka")}>V-VODKA </div>
            <div className="itmes" onClick={()=>filterbyCategory("rum")}>I-RUM</div>
            <div className="itmes" onClick={()=>filterbyCategory("tequila")}>TEQUILA</div>
            <div className="itmes" onClick={()=>filterbyCategory("scotch")}>SCOTCH</div>
            <div className="itmes" onClick={()=>filterbyCategory("liqueur")}>LIQUEUR</div>
            <div className="itmes" onClick={()=>filterbyCategory("worldOfWhiskey")}>W-WHISKEY</div>
            <div className="itmes" onClick={()=>filterbyCategory("brandy")}>BRANDY</div>
        </div><div className="sub_bar">
            <div className="itmes" onClick={()=>filterbyPrice(2000)}>2000</div>
            <div className="itmes" onClick={()=>filterbyPrice(40000)}>40000</div>
            <div className="itmes" onClick={()=>filterbyPrice(10000)}>10000</div>
            <div className="itmes" onClick={()=>filterbyPrice(2000)}>2000</div>
            <div className="itmes" onClick={()=>filterbyPrice(3000)}>3000</div>
            <div className="itmes" onClick={()=>filterbyPrice(2000)}>2000</div>
            <div className="itmes" onClick={()=>filterbyPrice(4000)}>4000</div>
            <div className="itmes" onClick={()=>filterbyPrice(10000)}>10000</div>
            <div className="itmes" onClick={()=>filterbyPrice(200003)}>200003</div>
            <div className="itmes" onClick={()=>filterbyPrice(30000)}>30000</div>
        </div></div>)}
       
         
           
    </div>
  
  </>
  )
}

export default Navbar
