import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Accordion.css'

export default function ControlledAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="accordion-container">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>
          ¿Por qué operar con Lynx Valores SA?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Como agente ByMA Lynx Valores adhiere a todas las normas y buenas prácticas recomendadas por el mercado, y las operaciones caen bajo la órbita de la Unidad de Investigaciones Financieras. Esto incluye la utilización de la última tecnología disponible aplicada al resguardo de sus datos.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography>¿Cuáles son los requisitos para abrir una cuenta?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Los requisitos son sencillos: En el caso de las personas físicas basta con acreditar identidad y domicilio (Documento y servicio a su nombre). En el caso de las personas jurídicas se requerirá dependiendo de la naturaleza societaria, documentación que acredite tanto la conformación de la misma como la identidad y domicilio de sus representantes. Además de esto se requeriran por exigencia de la UIF una declaración de persona políticamente expuesta.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography>¿Qué costo tiene abrir una cuenta?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          No hay costo de apertura o mantenimiento de cuenta.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography >¿Hay un importe mínimo para operar?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No hay un monto mínimo para operar. Sin embargo los costos de mercado y de comisión imponen ciertos límites razonables.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography >¿Que comisión se cobra por operar?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          La comisión depende exclusivamente de la operación a realizar. Para consultar el cuadro vigente <a href="/docs/Aranceles_comisiones.pdf" download>presione aquí</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography >¿Por qué al momento de la apertura de cuenta debo realizar la declaración de persona políticamente expuesta?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Es un requisito fundamental de la UIF que regula la actividad financiera. Para determinar si dicha declaración le corresponden <a href="/docs/PePs.pdf" download>ingrese aquí.</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography >¿Debo abrir una cuenta para operar una única vez?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Por seguridad todas las operaciones son realizadas por comitentes aquí.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

                                                                                                 
