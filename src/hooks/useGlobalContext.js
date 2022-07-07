import { useContext } from 'react'
import GlobalContext from '../contexts/GlobalContext'

export default function useGlobalContext() {
    const context = useContext(GlobalContext)

    if(!context) throw Error("Global context must be used within GlobalContextProvider!")
    
    return context
}
