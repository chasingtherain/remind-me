import React, { createContext, useEffect, useState } from 'react'

const GlobalContext = createContext()
const TIMEZONE_API_BASE_URL = "https://worldtimeapi.org/api"

export const GlobalContextProvider = ({children}) => {

    const [region, setRegion] = useState("")
    const [timezone, setTimezone] = useState("")

    useEffect(()=> {
        fetchTimezone()
        fetchInfo()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
  
      const fetchTimezone = async () => {
        const response = await fetch(`${TIMEZONE_API_BASE_URL}/timezone`)
        const timezones = response.json()
          .then(data => setRegion(data))
        console.log(timezones);
  
      }
      const fetchInfo = async () => {
        const response = await fetch(`${TIMEZONE_API_BASE_URL}/timezone/Asia/Singapore`)
        const info = response.json()
          .then(data => console.log(data))
        console.log(info);
      }

    return (
    <GlobalContext.Provider value={{
        region, 
        timezone,
        TIMEZONE_API_BASE_URL,
        setRegion,
        setTimezone,
        }}>
        {children}
    </GlobalContext.Provider>
    )
}

export default GlobalContext