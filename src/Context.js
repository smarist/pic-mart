import React from "react"
import axios from "axios"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = React.useState([])
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

    

    return (
        <Context.Provider value={{allPhotos, toggleFavorite}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}