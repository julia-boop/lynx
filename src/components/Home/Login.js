import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'


function Login() {
    const [isVisible, setIsVisible] = useState(true);
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
           setIsVisible(false);
      } else {
           setIsVisible(true);
      }  
    };
    return (
        isVisible
        &&
        <Fade>
        <div className="login-container" >
            <div>
            <img src="/icons/login.svg"/> <a>Ingresa a tu cuenta</a>
            </div>
        </div>
        </Fade>
    )
}

export default Login