import React from 'react'
import {Context} from "../Context"



function Image({className, img}) {
    const [hovered, setHovered] = React.useState(false)

    const {toggleFavorite} = React.useContext(Context)
    

    function onEnter(){
        setHovered(true)
    }

    function onLeave(){
        setHovered(false)
    }

    const heartIcon = hovered && <i className="ri-heart-line favorite" onClick={()=> toggleFavorite(img.id)}></i>
    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>

    return (
        <div 
        className={`${className} image-container`}
        onMouseLeave={onLeave}
        onMouseEnter={onEnter}
        >
            <img src={img.url} className="image-grid" alt="photos"/>
            {heartIcon}
            {cartIcon}
            
        </div>
    )
}

export default Image