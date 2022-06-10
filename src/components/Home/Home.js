import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Home.css' 
import Fade from 'react-reveal/Fade'
// import Login from './Login'


function Home() {
    let video = document.querySelector('video')
    // useEffect(() => {
    //     video.play()
    // })
    return (
        <div className="home-container" id="home">
            <Fade>
            <div className="image-container" >
                <Link to="/" className="home-logo">
                    <img src="/logos/LOGO-05.png" alt="home-logo"></img>
                </Link>
                <h3>Brindamos herramientas para que invertir sea simple y seguro. Soluciones y alternativas a medida de las necesidades de cada cliente.</h3>
            </div>
            </Fade>
            <div className="video-container"> 
                <video className="video" muted={true} autoPlay playsInline loop src="/videos/video-bg.mp4">
                <source  type="video/mp4"/>
                </video>
            </div>
            
        </div>
    )
}

export default Home
