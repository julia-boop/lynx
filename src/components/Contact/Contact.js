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
            <div className="form-container">
                <h1>Contacto</h1>
                <div className="success-msg"></div>
                <form ref={form} onSubmit={sendEmail}>
                    <input placeholder="Nombre y Apellido" type="text" name="user_name"></input>
                    <input placeholder="Email" type="email" name="user_email"></input>
                    <input placeholder="Telefono" type="text" name="user_phone"></input>
                    <textarea placeholder="Mensaje" name="message"></textarea>
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
