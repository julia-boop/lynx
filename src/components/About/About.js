import React from 'react'
import './About.css'
import Slide from 'react-reveal/Slide'

function About() {
    return (
        <div className="about-container" id="about">
            <Slide left>
            <div className="about-title">
            <h1>Quienes Somos;</h1>
            </div>
            </Slide>
            <Slide bottom>
            <div className="about-content">
                <div>
                    <h4>Fundada en Septiembre del año 2002 Lynx Valores SA se dedica desde sus comienzos a ofrecer una amplia gama de servicios financieros adecuándolos a las necesidades de las demandas particulares de los inversores en mercado de capitales. </h4>
                    <h4>Sus directores con mas de 20 años de trayectoria en el mercado financiero local, garantizan las mas altas normas de calidad e idoneidad en el manejo de inversiones. </h4>
                </div>
                <div className="icon-container">
                    <div className="icon">
                        <img src="./images/trayectoria.png" alt="trayectoria"/>
                        <h3>Trayectoria</h3>
                    </div>
                    <div className="icon">
                        <img src="./images/compromiso.png" alt="compromiso"/>
                        <h3>Compromiso</h3>
                    </div>
                    <div className="icon">
                        <img src="./images/crecimiento.png" alt="crecimiento"/>
                        <h3>Crecimiento</h3>
                    </div>
                </div>
            </div>
            </Slide>
        </div>
    )
}

export default About

