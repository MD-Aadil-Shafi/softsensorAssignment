import React,{useEffect} from 'react'
import './nav.css';
import {Link} from 'react-router-dom';
const Nav = () => {

  const myFunction = () =>{
    var x = document.getElementById("myTopnav")
   if(x.className === "topnav"){
     x.className += " responsive";
   }else{
     x.className = "topnav";
   }
  }

    return (
        <div class="topnav" id="myTopnav">
  <Link to="/" class="active">ADL STORE</Link>

  <Link to="/cart"><i className="fa fa-shopping-cart"></i> Cart</Link>
  <a className="icon" onClick={myFunction}>
    <i className="fa fa-bars"></i>
  </a>
</div>
    )
}



export default Nav
