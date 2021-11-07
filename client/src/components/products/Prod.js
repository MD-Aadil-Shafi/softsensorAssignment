import React from 'react'
import "./product.css"
import { RatingStar } from "rating-star";
import {addProducts} from '../../redux/cartRedux'
import {useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import Zoom from 'react-reveal/Zoom'

const Prod = ({product, id}) => {
    const dispatch = useDispatch();

const handleClick = () =>{
    dispatch(addProducts({product}));
    toast.success("Added to cart.")
}

    return (
        <Zoom>
        <div className="column">
          <div className="card">
          <img src={product.image} alt="..." className="prod-image"/>
          <div className="star">
          <RatingStar maxScore={5} id={product.id} rating={product.rating.rate}/>
          </div>
          <div className="title-div">
          <h3 className="prod-title">{product.title}</h3>
          </div>
          <div className="desc-div">
          <p className="prod-desc">{product.description}</p>
          </div>      
          <div className="flex">
            <p className="prod-cat">{product.category}</p>
            <p className="prod-price">$ {product.price}</p>
            </div>
            <button onClick={handleClick} className="cart-button">Add to Cart</button>
          </div>
        </div>
        </Zoom>
    )
}

export default Prod
