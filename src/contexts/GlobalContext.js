import React, { createContext, useEffect, useState } from 'react'

const GlobalContext = createContext()
const TIMEZONE_API_BASE_URL = "https://worldtimeapi.org/api"

export const GlobalContextProvider = ({children}) => {

    const [region, setRegion] = useState("")
    const [timezone, setTimezone] = useState("")
    const [currentTime, setCurrentTime] = useState("")
    const selectTimezone = (e)=> {
        setTimezone(e.target.value)
    }

    // fetch time zone info
    useEffect(()=> {
        fetchTimezone()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])

    // fetch time of a city
    useEffect(()=> {
        const fetchInfo = async () => {
            const response = await fetch(`${TIMEZONE_API_BASE_URL}/timezone/${timezone}`)
            response.json()
                .then(data => {
                    let localeTime = data.datetime
                    // splice api's date time data to get hh:mm:ss
                    console.log(localeTime);
                    let tIndex = localeTime.indexOf("T")
                    let lastDot = localeTime.lastIndexOf(".")
                    console.log(tIndex, lastDot)
                    setCurrentTime(localeTime.slice(tIndex+1,lastDot))
            })
        }
        fetchInfo()
    },[timezone])

  
      const fetchTimezone = async () => {
        const response = await fetch(`${TIMEZONE_API_BASE_URL}/timezone`)
        response.json()
          .then(data => setRegion(data))
        // console.log(timezones);
  
      }
    //   const fetchInfo = async () => {
    //     console.log(timezone);
    //     const response = await fetch(`${TIMEZONE_API_BASE_URL}/timezone/${timezone}`)
    //     // const response = await fetch(`${TIMEZONE_API_BASE_URL}/timezone/Asia/Singapore`)
    //     response.json()
    //       .then(data => {
    //         // setCurrentTime(data.datetime)
    //         console.log(data.datetime);
    //     })
    //   }

    return (
    <GlobalContext.Provider value={{
        currentTime,
        region, 
        timezone,
        TIMEZONE_API_BASE_URL,
        setCurrentTime,
        setRegion,
        setTimezone,
        selectTimezone,
        }}>
        {children}
    </GlobalContext.Provider>
    )
}

export default GlobalContext