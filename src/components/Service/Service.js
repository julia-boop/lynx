import React from 'react'
import './Service.css' 
import Slide from 'react-reveal'

function Service() {
    return (
        <div className="service-container" id="services">
            <div className="service-img">
                <img src="./images/service-bg_640x.jpeg" alt="service-img"/>
            </div>
            <Slide right>
            <div className="service-content">
                <h1>Servicios</h1>
                <div className="service-item-container">
                    <div className="item">
                        <img src="./icons/coins-solid.svg" alt="coins"/>
                        <h4>Operar online todo tipo de títulos como bonos, acciones, cauciones y opciones</h4>
                    </div>
                    <div className="item">
                        <img src="./icons/circle-question-solid.svg" alt="question"/>
                        <h4>Consultar los movimientos de la cuenta comitente</h4>
                    </div>
                    <div className="item">
                        <img src="./icons/bars-progress-solid.svg" alt="progress-bars"/>
                        <h4>Consultar la evolución histórica de su portfolio</h4>
                    </div>
                    <div className="item">
                        <img src="./icons/money-bill-trend-up-solid.svg" alt="trend-up"/>
                        <h4>Consultar las operaciones realizadas en el dia</h4>
                    </div>
                    <div className="item">
                        <img src="./icons/download-solid.svg" alt="download"/>
                        <h4>Descargar los boletos de las operaciones en formato PDF</h4>
                    </div>
                </div>  
            </div>
            </Slide>
        </div>
    )
}

export default Service
