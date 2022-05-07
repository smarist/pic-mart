import React from 'react'

function Image({className, img}) {
    const [hovered, setHovered] = React.useState(false)

    function onEnter(){
        setHovered(true)
        console.log(hovered)
    }

    function onLeave(){
        setHovered(false)
        console.log(hovered)
    }

    const heartIcon = hovered && <i className="ri-heart-line favorite"></i>
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