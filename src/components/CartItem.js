import React from "react"
import {Context} from "../Context"
import useHover from "../Hooks/useHover"


export default function CartItem(prop){
    const {removeFromCart} = React.useContext(Context)
    const [hovered, ref] = useHover()
    return(
        <div className="cart-item">
            <i className= {hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"}
            onClick={()=> removeFromCart(prop.item.id)}
            ref={ref}></i>
            <img src={prop.item.url} width= "130px" alt="photos"/>
            <p>$5.99</p>
        </div>
    )
}

