import React from 'react';

export function AvisoPrivacidad({ onClose }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={onClose} style={styles.closeBtn}>Cerrar</button>
        <h2 style={styles.title}>Aviso de Privacidad</h2>
        <div style={styles.content}>
          <p>El presente Aviso de Privacidad tiene como objetivo informar a los usuarios y clientes de Soluciones Sever, ubicada en AV. Ignacio L Vallarta 6503, Colonia Ciudad Granja, Ciudad Zapopan, Jalisco, C.P. 45010, teléfono 3317287405, acerca del tratamiento y protección de sus datos personales de acuerdo con lo establecido en la legislación vigente en materia de protección de datos personales.</p>
          
          <p>1. Responsable de los datos personales: Soluciones Sever es la entidad responsable del tratamiento de sus datos personales y se compromete a proteger la privacidad de los mismos de acuerdo con las disposiciones legales aplicables.</p>
          
          <p>2. Datos personales recabados: Soluciones Sever podrá recabar y tratar los siguientes datos personales, entre otros:<br/>
             - Información de identificación: Nombre completo, dirección, número telefónico, dirección de correo electrónico.<br/>
             - Datos de contacto: Número telefónico y dirección de correo electrónico.<br/>
             - Información financiera: Número de cuenta bancaria, datos de tarjeta de crédito o débito para realizar pagos.<br/>
             - Información laboral: Puesto, empresa en la que labora y datos de contacto laboral.</p>
             
          <p>3. Finalidades del tratamiento: Los datos personales recabados serán utilizados para las siguientes finalidades:<br/>
             - Proveer los productos y servicios solicitados por el cliente.<br/>
             - Realizar la facturación y cobranza correspondiente por los productos y servicios adquiridos.<br/>
             - Brindar atención y soporte al cliente.<br/>
             - Enviar información promocional, publicitaria o de interés sobre nuestros productos y servicios.<br/>
             - Realizar estudios internos sobre hábitos de consumo y preferencias para mejorar nuestros productos y servicios.</p>
             
          <p>4. Transferencia de datos: Soluciones Sever podrá compartir los datos personales con terceros proveedores de servicios que colaboren en el cumplimiento de las finalidades descritas en este Aviso de Privacidad. En ningún caso se realizará una transferencia de datos con fines comerciales o lucrativos a terceros.</p>
          
          <p>5. Medidas de seguridad: Soluciones Sever implementa medidas de seguridad administrativas, técnicas y físicas para proteger los datos personales contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado.</p>
          
          <p>6. Derechos ARCO: Usted como titular de los datos personales tiene derecho a acceder, rectificar, cancelar y oponerse al tratamiento de sus datos. Para ejercer estos derechos, deberá enviar una solicitud por escrito a la siguiente dirección: [Incluir dirección física o correo electrónico para recibir solicitudes].</p>
          
          <p>7. Cambios al Aviso de Privacidad: Soluciones Sever se reserva el derecho de realizar modificaciones o actualizaciones a este Aviso de Privacidad. Cualquier cambio se comunicará a través de nuestra página web o por otros medios que considere adecuados.</p>
          
          <p>Al utilizar nuestros servicios, usted acepta los términos y condiciones descritos en este Aviso de Privacidad. Si tiene alguna duda o inquietud acerca del tratamiento de sus datos personales, por favor, contáctenos a través de los medios proporcionados.</p>
          
          <p>Fecha de última actualización: 8 de Enero, 2025.</p>
          
          <p>Atentamente,<br/>Soluciones Sever.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    padding: '20px'
  },
  modal: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '8px',
    maxWidth: '800px',
    width: '100%',
    maxHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    color: '#333',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
  },
  closeBtn: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    padding: '8px 16px',
    backgroundColor: '#003366', // Un azul oscuro profesional, ajústalo a tus colores
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  title: {
    marginTop: 0,
    marginBottom: '20px',
    color: '#000',
    borderBottom: '2px solid #eee',
    paddingBottom: '10px'
  },
  content: {
    overflowY: 'auto',
    lineHeight: '1.6',
    paddingRight: '15px'
  }
};