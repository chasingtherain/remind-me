import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {

    const [region, setRegion] = useState("")
    const [currentTime, setCurrentTime] = useState("")
    const [timezoneSelection, setTimezoneSelection] = useState('ETC/GMT')

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
        const fetchInfo = () => {

            if(timezoneSelection){
              const url = `${process.env.REACT_APP_TIMEZONE_API_BASE_URL}/timezone/${timezoneSelection}`

              axios
                .get(url)
                .then(resp => {
                    let localeTime = resp.data.datetime
                    // splice api's date time data to get hh:mm:ss
                    console.log(localeTime);
                    let tIndex = localeTime.indexOf("T")
                    let lastDot = localeTime.lastIndexOf(".")
                    console.log(tIndex, lastDot)
                    setCurrentTime(localeTime.slice(tIndex+1,lastDot))
              })
          }
            else{
              const url = `${process.env.REACT_APP_TIMEZONE_API_BASE_URL}/timezone/etc/gmt`
              axios
                  .get(url)
                  .then(resp => {
                      let localeTime = resp.data.datetime
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

  
    const fetchTimezone = () => {

      const url = `${process.env.REACT_APP_TIMEZONE_API_BASE_URL}/timezoneSelection`

      axios
        .get(url)
        .then(resp => {
          const gmtData = resp.data
                                .filter(entry => entry.includes("GMT"))
                                .map(entry => entry.toUpperCase())
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