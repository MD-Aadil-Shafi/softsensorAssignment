import React from 'react'
import { useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'
import './cart.css'
import {Link} from 'react-router-dom'

const Cart = () => {
    const cart = useSelector(state => state.cart)
    // {cart.products.map((p)=>(
    //     console.log(p)
    // ))}
    return (
        <div className="cart">

        {cart.products.length > 0 ? cart.products.map(product=>(      
        
            <div className="items">
        <div className="item-flex">
        <img src={product.product.image} alt="..." className="cart-img"/>
        <div>
        <h4 className="cart-cat">Category : {product.product.category} &nbsp; &nbsp; <span className="cart-price">Price : $ {product.product.price}</span></h4>
        <h3 style={{fontWeight:"400"}}>Title {product.product.title}</h3>
        <p className="cart-desc" style={{fontWeight:"300"}}>Description {product.product.description}</p>

        </div>
        </div>
        <hr></hr>
        </div>
        )) : <h1 className="no-cart-text">No Product added yet.....</h1>}
        <Link to="/"><button className="cart-btn">Continue Shopping</button></Link>
        </div>
    )
}

export default Cart
