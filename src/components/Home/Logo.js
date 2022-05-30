import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'


function Logo() {
    const [isVisible, setIsVisible] = useState(false);
    const [height, setHeight] = useState(0)

    const getOffset = (element) => {
        const rect = element.getBoundingClientRect(), scrollTop = window.pageYOffset ||  document.documentElement.scrollTop;
        return rect.top + scrollTop;
      };
    
    useEffect(() => {   
      window.addEventListener("scroll", listenToScroll);
      return () => 
         window.removeEventListener("scroll", listenToScroll); 
    }, [])
    
    const listenToScroll = () => {
      let heightToHideFrom = getOffset(document.querySelector("#about"))
      
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      console.log(isVisible)
      setHeight(winScroll);
  
      if (winScroll > heightToHideFrom) {  
           setIsVisible(true);
      } else {
           setIsVisible(false);
      }  
    };
    return (
        isVisible
        &&
        <Fade>
        <div className="logo-container" >
            <div>
            <img src="/logos/Logo-06.png"/>
            </div>
        </div>
        </Fade>
    )
}

export default Logo
