import React from 'react'
import './Faqs.css'
import ControlledAccordion from './Accordion';
import Fade from 'react-reveal'

function Faqs() {
    return (
        <div className="faqs-container" id="faqs">
            <Fade top>
            <div className="faqs-title">
                <h1>Preguntas Frecuentes</h1>
            </div>
            </Fade>
            <Fade top>
            <div className="faqs-content">
                <ControlledAccordion />
            </div>
            </Fade>
        </div>
    )
}

export default Faqs
