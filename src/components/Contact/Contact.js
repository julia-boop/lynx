import React, {useRef} from 'react'
import './Contact.css'
import emailjs from 'emailjs-com';
import Fade from 'react-reveal'


function Contact() {
    const form = useRef();
    

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_dcixk5v', 'template_gmj3buc', form.current, 'ta3gMWZHFw3Nx_YzG')
        .then((result) => {
            let succesmsg = document.querySelector('.success-msg')
            let formsent = document.querySelector('form')
            succesmsg.innerHTML = '<p>El mensaje ha sido enviado con éxito</p>'
            formsent.reset()
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        }).then(() => {
            setTimeout(() => {
                let succesmsgsent = document.querySelector('.success-msg')
                succesmsgsent.innerHTML = ''
            }, 3000)
        })
    };
    return (
        <div className="contact-container" id="contact">
            <div className="links-container">
                <div className="link-item">
                    <img src="/images/linkedin-brands.png" alt="linkedin"></img>
                    <a href="https://www.linkedin.com/company/lynx-bursatil/mycompany/">LinkedIn Lynx Valores SA</a>
                </div>
                <div className="link-item">
                    <img src="/images/map-pin-solid.png" alt="map-pin"></img>
                    <a href="https://goo.gl/maps/9DH16Aj5o8vn8fw99">Av. Corrientes 330, CABA</a>
                </div>
                <div className="link-item">
                    <img src="/images/envelope-solid.png" alt="envelope"></img>
                    <a href="mailto:info@lynxbursatil.com.ar">info@lynxbursatil.com.ar</a>
                </div>
                <div className="link-item">
                    <img src="/images/phone-solid.png" alt="phone"></img>
                    <a>11-4394-5969</a>
                </div>
            </div>
            <div className="form-container">
                <h1>Contacto</h1>
                <div className="success-msg"></div>
                <form ref={form} onSubmit={sendEmail}>
                    <input placeholder="Nombre y Apellido" type="text" name="user_name"></input>
                    <input placeholder="Email" type="email" name="user_email"></input>
                    <input placeholder="Telefono" type="text" name="user_phone"></input>
                    <textarea placeholder="Mensaje" name="message"></textarea>
                    <button type="submit" value="Send">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
