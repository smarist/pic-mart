import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <header>
            <h2>Pic Some</h2>
            <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
            <FontAwesomeIcon icon={faShoppingCart} />
        </header>
    )
}

export default Header
