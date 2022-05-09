import React from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems, emptyCart} = React.useContext(Context)
    const [buttonText, setButtonText] = React.useState("place Order")
    const total = cartItems.length * 5.99
    const displayTotal = total.toLocaleString("en-US", {style: "currency", currency: "USD"})
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item}/>
    ))

    function placeOrder(){
        setButtonText("Ordering...")
        setTimeout(()=> {
            console.log("Order plced")
            setButtonText("Placed Order")
            emptyCart()
        }, 3000)
    }

    

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {displayTotal} </p>
            {cartItems.length? <div className="order-button">
                <button onClick={placeOrder}>{buttonText}</button>
            </div> : "You have no items in your cart"}
        </main>
    )
}

export default Cart