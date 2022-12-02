import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import {Link} from 'react-scroll';
import './Login.css'



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

    const link1 = "http://misvalores.lynxbursatil.com.ar/"

    return (
        isVisible
        &&
        <Fade>
        <div className="login-container" >
            <div className="login-item">
              <a href={link1}>Operar</a>
            </div>
            <div className="login-item">
            <Link 
              to="contact" 
              activeClass="active" 
              smooth="true" 
              style={{"cursor":"pointer"}} 
              spy={true}
              duration={2000}
              delay={500}>
                Abrí tu cuenta
              </Link>
            </div>
        </div>
        </Fade>
    )
}

export default Login