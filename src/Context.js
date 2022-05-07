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


    return (
        <Context.Provider value={{allPhotos}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}