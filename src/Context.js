import React from "react"
import axios from "axios"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    
    React.useEffect(()=> {
        axios.get(url).then((response) => {
            setAllPhotos(response.data)
        })
        
    }, [])

    function toggleFavorite(id){
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                console.log(!photo.isFavorite)
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            return photo
        })
        setAllPhotos(updatedArr)
    }    

    function addToCart(newItem){
        setCartItems(prevItems => [...prevItems, newItem])
    }

    function removeFromCart(id){
        setCartItems(prevItems => prevItems.filter(item => { 
            return item.id !== id 
        }));
        console.log("removed")
    }

    function emptyCart(){
        setCartItems([])
    }
    console.log(cartItems)
    return (
        <Context.Provider value={{allPhotos, toggleFavorite, cartItems, addToCart, removeFromCart, emptyCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}