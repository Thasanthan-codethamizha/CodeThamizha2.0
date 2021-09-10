import React, { useEffect, useState } from "react"
import { Switch, useLocation } from "react-router-dom"
import TopBarProgress from "react-topbar-progress-indicator"
import { CircleToBlockLoading } from 'react-loadingg';
const CustomSwitch = ({ children }) => {
   const [progress, setProgress] = useState(false)
   const [prevLoc, setPrevLoc] = useState("")
   const location = useLocation()
   TopBarProgress.config({
    barColors: {
      "0": "#fff",
      "1.0": "#fff"
    },
    shadowBlur: 5
  });
   useEffect(() => {
      setPrevLoc(location.pathname)
      setProgress(true)
      if(location.pathname===prevLoc){
          setPrevLoc('')
          //thanks to ankit sahu
      }
   }, [location])

   useEffect(() => {
      setProgress(false)
   }, [prevLoc])

   return (
      <>
         {progress && <TopBarProgress />}
         <Switch>{children}</Switch>
      </>
   )
}

export default CustomSwitch