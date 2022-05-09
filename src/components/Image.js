import React from 'react'
import {Context} from "../Context"



function Image({className, img}) {
    const [hovered, setHovered] = React.useState(false)

    const {toggleFavorite, addToCart, cartItems, removeFromCart} = React.useContext(Context)
    

    function onEnter(){
        setHovered(true)
    }

    function onLeave(){
        setHovered(false)
    }

    function heartIcon(){
        if(img.isFavorite){
            return <i className="ri-heart-fill favorite" onClick={()=> toggleFavorite(img.id)}></i>
        }
         else if(hovered){
            return <i className="ri-heart-line favorite" onClick={()=> toggleFavorite(img.id)}></i>
        }
    }
        
    function cartIcon(){
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart){
            return <i className="ri-shopping-cart-fill cart" onClick={()=> removeFromCart(img.id)}></i>
        }
         else if(hovered){
            return <i className="ri-add-circle-line cart" onClick={()=> addToCart(img)}></i>
        }
    }  
   

    return (
        <div 
        className={`${className} image-container`}
        onMouseLeave={onLeave}
        onMouseEnter={onEnter}
        >
            <img src={img.url} className="image-grid" alt="photos"/>
            {heartIcon()}
            {cartIcon()}
            
        </div>
    )
}
/*
Image.propTypes = {
    className: PropTypes.string,
    img: ProTypes.shape({
        id: Protypes.string.isRequired,
        url: ProTypes.string.isRequired,
        isFavorite: ProTypes.bool
    })
}
*/
export default Image