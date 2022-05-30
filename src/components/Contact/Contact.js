import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className="contact-container" id="contact">
            <div className="links-container">
                <div className="link-item">
                    <img src="/icons/linkedin-brands.svg" alt="linkedin"></img>
                    <a href="https://www.linkedin.com/company/lynx-bursatil/mycompany/">LinkedIn Lynx Valores SA</a>
                </div>
                <div className="link-item">
                    <img src="/icons/map-pin-solid.svg" alt="map-pin"></img>
                    <a href="https://goo.gl/maps/9DH16Aj5o8vn8fw99">Av. Corrientes 330, CABA</a>
                </div>
                <div className="link-item">
                    <img src="/icons/envelope-solid.svg" alt="envelope"></img>
                    <a href="mailto:info@lynxbursatil.com.ar">info@lynxbursatil.com.ar</a>
                </div>
                <div className="link-item">
                    <img src="/icons/phone-solid.svg" alt="phone"></img>
                    <a>11-4394-5969</a>
                </div>
            </div>
            <div className="form-container">
                <h1>Contacto</h1>
                <form>
                    <input placeholder="Nombre" type="text"></input>
                    <input placeholder="Apellido" type="text"></input>
                    <input placeholder="Email" type="email"></input>
                    <input placeholder="Telefono" type="number"></input>
                    <textarea placeholder="Mensaje"></textarea>
                    <button>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
