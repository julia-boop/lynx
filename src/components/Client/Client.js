import React from 'react'
import './Client.css'
import Fade from 'react-reveal';

function Client() {
    return (
        <div className="client-container" id="client">
            <Fade top>
            <div className="client-title-container">
                <h1>Clientes</h1>
            </div>
            </Fade>
            <div className="client-content-container">
                <Fade left>
                <div className="client-content">
                    <h4>
                    En Lynx Valores trabajamos para identificar los instrumentos financieros que se adapten al perfil de inversión de nuestros clientes. Orientados a resultados, optimizamos carteras basados en la amplia gama de productos que ofrece el mercado financiero. Además de ofrecer un canal efectivo de comunicación entre asesores y comitentes para brindar soluciones financieras de forma rápida y precisa.
                    </h4>
                </div>
                </Fade>
                <Fade right>
                <div className="client-icon-container">
                    <div className="client-item">
                        <img src="/images/person.png" alt="person"></img>
                        <h5>Individuos</h5>
                    </div>
                    <div className="client-item">
                        <img src="/images/corporate.png" alt="corporate"></img>
                        <h5>Corporate</h5>
                    </div>
                    <div className="client-item">
                        <img src="/images/institucional.png" alt="institution"></img>
                        <h5>Instituciones</h5>
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    )
}

export default Client
