import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header>
            <Link><h2>Pic Some</h2></Link>
            <Link><FontAwesomeIcon icon={faShoppingCart} /></Link>
            <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
            
        </header>
    )
}

export default Header
