import React from "react"
import {Context} from "../Context"

export default function CartItem(prop){
    const {removeFromCart} = React.useContext(Context)
    const [hovered, setHovered] = React.useState(false)
    return(
        <div className="cart-item">
            <i className= {hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"}
            onClick={()=> removeFromCart(prop.item.id)}
            onMouseEnter={()=> setHovered(true)}
            onMouseLeave={()=> setHovered(false)}></i>
            <img src={prop.item.url} width= "130px" alt="photos"/>
            <p>$5.99</p>
        </div>
    )
}

