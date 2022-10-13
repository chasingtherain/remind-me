import React, { createContext, useEffect, useState } from 'react'

const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {

    const [region, setRegion] = useState("")
    const [timezoneSelection, setTimezoneSelection] = useState("")
    const [currentTime, setCurrentTime] = useState("")
    const selectTimezone = (e)=> {
      setTimezoneSelection(e.target.value)
    }

    // fetch time zone info
    useEffect(()=> {
        fetchTimezone()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])

    // fetch time of a city
    useEffect(()=> {
        const fetchInfo = async () => {

            if(timezoneSelection){
              const response = await fetch(`${process.env.REACT_APP_TIMEZONEURL}/timezone/${timezoneSelection}`)
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
            else{
              const response = await fetch(`${process.env.REACT_APP_TIMEZONEURL}/timezone/etc/gmt`)
              response
                  .json()
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
        }
        fetchInfo()
    },[timezoneSelection])

  
      const fetchTimezone = async () => {
        const response = await fetch(`${process.env.REACT_APP_TIMEZONEURL}/timezoneSelection`)
        response.json()
          .then(data => {
            const gmtData = data.filter(entry => entry.includes("GMT"))
            
            console.log("gmtData: ", gmtData)
            setRegion(gmtData)
          })
        // console.log(timezones);
  
      }

    return (
    <GlobalContext.Provider value={{
        currentTime,
        region, 
        timezoneSelection,
        setCurrentTime,
        setRegion,
        setTimezoneSelection,
        selectTimezone,
        }}>
        {children}
    </GlobalContext.Provider>
    )
}

export default GlobalContext