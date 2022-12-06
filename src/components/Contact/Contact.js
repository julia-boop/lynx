import React, {useRef} from 'react'
import './Contact.css'
import emailjs from 'emailjs-com';
import Fade from 'react-reveal'


function Contact() {
    const form = useRef();
    
    const sendEmail = (e) => {
      e.preventDefault();
      let params = {
          email: document.querySelector('.input-email').value,
          text: document.querySelector('.input-text').value
      }
      emailjs.sendForm('service_2f4uu6a', 'template_kfev3s4', e.target, 'E6FWqqpm_2ck8YeVV')
        .then((result) => {
            let succesmsg = document.querySelector('.success-msg')
            let formsent = document.querySelector('form')
            succesmsg.innerHTML = '<p>El mensaje ha sido enviado con éxito</p>'
            console.log(e.target.elements);
            formsent.reset()
            
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
            <div className="form-container">
                <h1>Contacto</h1>
                <div className="success-msg"></div>
                <form ref={form} onSubmit={sendEmail}>
                    <input placeholder="Nombre y Apellido" type="text" name="user_name"></input>
                    <input placeholder="Email" type="email" name="user_email" className="input-email"></input>
                    <input placeholder="Telefono" type="text" name="user_phone"></input>
                    <textarea placeholder="Mensaje" name="message" className="input-text"></textarea>
                    <button type="submit" value="Send">Enviar</button>
                    <div className="links-container">
                        <div className="link-item">
                            <a href="https://www.linkedin.com/company/lynx-bursatil/mycompany/">
                                <img src="/images/linkedin.png" alt="linkedin"></img>
                            </a>
                        </div>
                        <div className="link-item">
                            <a href="mailto:info@lynxbursatil.com.ar">
                                <img src="/images/envelope-solid.png" alt="envelope"></img>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
